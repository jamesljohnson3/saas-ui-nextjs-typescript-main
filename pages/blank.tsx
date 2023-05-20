import { Box, VStack, Grid } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { Nextjs } from '../components/NextLogo'
import { Field, FormLayout, Link} from '@saas-ui/react'
import {
  StepForm,
  FormStep,
  NextButton,
} from '@saas-ui/react'
import React from 'react'

const IndexPage = () => {
  const onSubmit = (params) => {
    console.log(params)
    return new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })
  }

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