import {
    StepForm,
    FormStepper,
    FormStep,
    PrevButton,
    NextButton,
    ButtonGroup,
    Field,
    FormLayout,
    FormValue,
    Loader,
    Property,
    PropertyList,
    StepperCompleted,
  } from '@saas-ui/react' 
  import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
  export default function BasicStepForm() {
    const schemas = {
        project: Yup.object().shape({
          name: Yup.string().required().label('Name'),
          description: Yup.string().label('Description'),
        }),
        members: Yup.object().shape({
          members: Yup.string().label('Members'),
        }),
      }
    
      const onSubmit = (params) => {
        console.log(params)
        return new Promise((resolve) => {
          setTimeout(resolve, 1000)
        })
      }
    
      return (
        <StepForm
          defaultValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={onSubmit}
        >
          <FormLayout>
            <FormStepper orientation="vertical">
              <FormStep
                name="project"
                title="Project details"
                resolver={yupResolver(schemas.project)}
              >
                <FormLayout>
                  <Field name="name" isRequired label="Name" />
                  <Field name="description" label="Description" />
                  <NextButton />
                </FormLayout>
              </FormStep>
              <FormStep
                name="members"
                title="Invite your team"
                resolver={yupResolver(schemas.members)}
              >
                <FormLayout>
                  <Field
                    name="members"
                    type="textarea"
                    label="Invite people"
                    placeholder="hello@saas-ui.dev, etc"
                    autoFocus
                  />
                  <ButtonGroup>
                    <NextButton />
                    <PrevButton variant="ghost" />
                  </ButtonGroup>
                </FormLayout>
              </FormStep>
              <FormStep name="confirm" title="Confirm">
                <FormLayout>
                  <Text>Please confirm that your information is correct.</Text>
                  <PropertyList>
                    <Property label="Name" value={<FormValue name="name" />} />
                    <Property
                      label="Description"
                      value={<FormValue name="description" />}
                    />
                  </PropertyList>
                  <ButtonGroup>
                    <NextButton />
                    <PrevButton variant="ghost" />
                  </ButtonGroup>
                </FormLayout>
              </FormStep>
    
              <StepperCompleted>
                <Loader>We are setting up your project, just a moment...</Loader>
              </StepperCompleted>
            </FormStepper>
          </FormLayout>
        </StepForm>
      )
    }