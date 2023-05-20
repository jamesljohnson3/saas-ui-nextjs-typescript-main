  import { Text,
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
    </>
  );
}
