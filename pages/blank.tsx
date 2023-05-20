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