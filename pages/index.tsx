import { Box, VStack, Grid } from '@chakra-ui/react'
import { Layout } from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Saas UI + Next.js + TypeScript example">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
     Test
          </VStack>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage