import {
  Box,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'
import { Card, CardProps } from '@saas-ui/react'
import { Section } from '../../components/section'
import { Testimonial } from '../../components/testimonials'

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, 'title'> {}

export const HighlightsItem = (props: { [x: string]: any; children: any; title: any }) => {
  const { children, title, ...rest } = props
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  )
}

export const HighlightsTestimonialItem = (props: { [x: string]: any; name: any; description: any; avatar: any; children: any; gradient?: string[] | undefined }) => {
  const {
    name,
    description,
    avatar,
    children,
    gradient = ['primary.500', 'secondary.500'],
    ...rest
  } = props
  const theme = useTheme()
  return (
   
      <><Box
      bgGradient={`linear(to-br, ${transparentize(
        gradient[0],
        0.8
      )(theme)}, ${transparentize(gradient[1], 0.8)(theme)})`}
      opacity="1"
      position="absolute"
      inset="0px"
      pointerEvents="none"
      zIndex="0"
      _dark={{ opacity: 0.5, filter: 'blur(50px)' }} /><Testimonial
        name={name}
        description={<Box color="whiteAlpha.700">{description}</Box>}
        avatar={avatar}
        border="0"
        bg="transparent"
        boxShadow="none"
        color="white"
        position="relative"
      >
        {children}
      </Testimonial></>

  )
}

export const Highlights = (props: { [x: string]: any; children: any }) => {
  const { children, ...rest } = props

  return (
    <Section
      children={undefined} className={undefined} position="relative"
      {...rest}    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  )
}
