import { Box, VStack, Grid } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { Nextjs } from '../components/NextLogo'
import {  Link} from '@saas-ui/react'
import React from 'react'

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