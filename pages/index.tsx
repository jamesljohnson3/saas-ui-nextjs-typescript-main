import { Box, Code, Text, VStack, Grid } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import { Nextjs } from '../components/NextLogo'
import { Link } from '@saas-ui/react'
import Blog from './blog';

const IndexPage = () => {
  return (
    <Layout title="Saas UI + Next.js + TypeScript example">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
           
           <Blog mediumArticles={undefined}/>
          </VStack>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage
