import * as React from 'react'
import {
  Box,
  HStack,
  IconButton,
  Kbd,
  Link,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react'
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa'


import headerNav from '../../data/header-nav'
import {NavLink} from '../../components/nav-link/nav-link'
import { MobileNavButton } from '../../components/mobile-nav'
import { MobileNavContent } from '../../components/mobile-nav'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'

import { SearchInput, useHotkeys } from '@saas-ui/react'

import { GlobalSearch } from '../global-search/global-search'

const Header = () => {
  const mobileNav = useDisclosure()
  const isDesktop = useBreakpointValue({ xl: true })

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  const { isOpen, onOpen, onClose } = useDisclosure()

  useHotkeys(['/', 'CMD+K'], () => {
    onOpen()
  })

  return (
    <HStack flex="1" ps="4">
      <Box>
        {isDesktop && (
          <SearchInput
            placeholder="Search..."
            size="sm"
            borderRadius="md"
            onFocus={onOpen}
            rightElement={<Kbd fontSize="md">/</Kbd>}
          />
        )}
        <GlobalSearch
          isOpen={isOpen}
          onClose={onClose}
          onSelect={(value: any) => {
            console.log(value)
          }}
        />
      </Box>
      <HStack spacing="2" flexShrink={0} flex="1" justifyContent="flex-end">
        {headerNav.map(({ href, id, ...props }, i) => {
          return (
            <NavLink
              display={{ base: 'none', lg: 'block' }}
              href={href || `/#${id}`}
              key={i}
             
              {...props}
            />
          )
        })}

      

        <Tooltip label="Discord community">
          <IconButton
            variant="ghost"
            aria-label="discord"
            icon={<FaDiscord size="14" />}
            borderRadius="md"
            as={Link}
            href="#"
          />
        </Tooltip>

        <Tooltip label="Twitter">
          <IconButton
            variant="ghost"
            aria-label="twitter"
            icon={<FaTwitter size="14" />}
            borderRadius="md"
            as={Link}
            href="#"
          />
        </Tooltip>

        <Tooltip label="Github">
          <IconButton
            variant="ghost"
            aria-label="github"
            icon={<FaGithub size="14" />}
            borderRadius="md"
            as={Link}
            href="#"
          />
        </Tooltip>

    Icon

        <MobileNavButton
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
        />

        <MobileNavContent
          isOpen={mobileNav.isOpen}
          onClose={mobileNav.onClose}
        />
      </HStack>
    </HStack>
  )
}

export default Header
