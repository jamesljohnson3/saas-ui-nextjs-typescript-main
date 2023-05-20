import {
  Box,
  Flex,
  Heading,
  useBreakpointValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import AccessibleLink from '../../components/link'
import React from 'react'
import Image from 'next/image';

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

import siteConfig from '../../data/site-config'

const Logo = ({ href = '/', onClick }: LogoProps) => {
  const isMobile = useBreakpointValue({ base: true, sm: false })
  let logo
  if (siteConfig.logo) {
    logo = (
      <Box
        as={isMobile ? siteConfig.logoIcon : siteConfig.logo}
        height="32px"
        mt="-4px"
      />
    )
  } else {
    logo = (
      <Heading as="h1" size="md">
        {siteConfig.seo?.title}
      </Heading>
    )
  }

  return (
    <Flex h="4" flexShrink="0" alignItems="flex-start">
      <AccessibleLink
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
      >
 <Image
        src="https://res.cloudinary.com/unlimitpotential/image/upload/v1684541520/Screen_Shot_2023-05-19_at_8.09.24_PM_lhtctr.png"
        alt="Logo"
        width={110}
      />        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </AccessibleLink>
    </Flex>
  )
}

export default Logo
