import { Box, VStack, Grid } from '@chakra-ui/react'
import { Layout } from '../components/Layout'
import Recent 		from '../components/recent'
import settings 	from '../content/_settings.json'

const IndexPage = ({ mediumArticles }) => {
  return (
    <Layout title="Saas UI + Next.js + TypeScript example">
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
           
          <Recent mediumArticles={mediumArticles}/>
          </VStack>
        </Grid>
      </Box>
    </Layout>
  )
}
export default IndexPage
// This gets called on every request
export async function getServerSideProps({ res }) {

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=600, stale-while-revalidate=59'
	)

	console.log(settings.username.medium)

	const [ mediumRSS ] = await Promise.all( [
		fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${settings.username.medium}`),
	] )
	
	let [ mediumArticles ] = await Promise.all( [
		mediumRSS.json(),
	] )

	return { props: { mediumArticles } }
}