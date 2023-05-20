import { Box, Text, VStack, Grid, ButtonGroup } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { Nextjs } from '../components/NextLogo'
import { Field, FormLayout, FormValue, Link, Loader, Property, PropertyList, StepperCompleted } from '@saas-ui/react'
import {
  StepForm,
  FormStepper,
  FormStep,
  PrevButton,
  NextButton,
} from '@saas-ui/react'
import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const schemas = {
  project: Yup.object().shape({
    name: Yup.string().required().label('Name'),
    description: Yup.string().label('Description'),
  }),
  members: Yup.object().shape({
    members: Yup.string().label('Members'),
  }),
}

const onSubmit = (params: any) => {
  console.log(params)
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}
const IndexPage = () => {
  return (
    <Layout title="Saas UI + Next.js + TypeScript example">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Nextjs h="16" pointerEvents="none" />

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
            <Link
              color="purple.500"
              fontSize="xl"
              href="https://saas-ui.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about Saas UI
            </Link>
          </VStack>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage