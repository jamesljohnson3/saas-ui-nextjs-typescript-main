import {
  chakra,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Em = ({ children, ...props }) => {
  return (
    <Text
      color={useColorModeValue('black', 'white')}
      as="em"
      fontStyle="normal"
      {...props}
    >
      {children}
    </Text>
  )
}

// @todo make this configurable
export const Br = (props: any) => {
  return (
    <chakra.span {...props}>
      <br />
    </chakra.span>
  )
}
