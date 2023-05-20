
import { Field, FormLayout} from '@saas-ui/react'
import {
  StepForm,
  FormStep,
  NextButton,
} from '@saas-ui/react'

export default function Home () {
    const onSubmit = (params: any) => {
     console.log(params)
     return new Promise((resolve) => {
       setTimeout(resolve, 1000)
     })
   }
return ( <><StepForm
    defaultValues={{
      name: '',
      email: '',
      password: '',
    }}
    onSubmit={onSubmit}
  >
    <FormLayout>
      <FormStep name="profile">
        <FormLayout>
          <Field name="name" label="Name" rules={{ required: true }} />
          <Field name="email" label="Email" rules={{ required: true }} />
          <NextButton />
        </FormLayout>
      </FormStep>
      <FormStep name="password">
        <FormLayout>
          <Field
            name="password"
            label="Password"
            rules={{ required: true, minLength: 4 }}
          />
          <NextButton />
        </FormLayout>
      </FormStep>
    </FormLayout>
  </StepForm></>)} 