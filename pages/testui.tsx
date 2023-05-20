import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    NavItem,
  } from '@saas-ui/sidebar'
  import { Box, Text,  SimpleGrid,
  } from '@chakra-ui/react'

  import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Link,
  CardFooter,
} from '@saas-ui/react'


export default function Home() {


  return (
    <>
     <AppShell
  navbar={
    <Box as="header" borderBottomWidth="1px" py="2" px="4">
Logo    </Box>
  }
  sidebar={
    <Sidebar>
      <SidebarSection>
        <NavItem>Home</NavItem>
        <NavItem>Settings</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
  <Box as="main" flex="1" py="2" px="4" overflowY="auto">
  <SimpleGrid columns={[1, null, 2]} gap="2">
  <Card variant="outline">
    <CardHeader>

Logo      <CardTitle>Github</CardTitle>
    </CardHeader>
    <CardBody py={2}>
      <Text color="muted" size="md">
        Link pull requests
      </Text>
    </CardBody>
    <CardFooter spacing={4}>
      <Button variant="outline" colorScheme="green">
        Enabled
      </Button>
      <Button as={Link} variant="link" isExternal>
        Learn more
      </Button>
    </CardFooter>
  </Card>
  <Card variant="outline">
    <CardHeader>
Logo      <CardTitle>Slack</CardTitle>
    </CardHeader>
    <CardBody py={2}>
      <Text color="muted" size="md">
        Send push notifications
      </Text>
    </CardBody>
    <CardFooter spacing={4}>
      <Button colorScheme="gray" variant="solid">
        Enable
      </Button>
      <Button as={Link} variant="link" isExternal>
        Learn more
      </Button>
    </CardFooter>
  </Card>
</SimpleGrid>  </Box>
</AppShell>
    </>
  );
}
