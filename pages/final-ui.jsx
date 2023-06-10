/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    SidebarToggleButton,
    SidebarOverlay,
    NavGroup,
    NavItem,
  } from '@saas-ui/sidebar'
  import { Box, Badge,Image, Heading, HStack, Flex, Text, Checkbox } from "@chakra-ui/react";


const navigation = [
    { name: 'Dashboard', href: '#', icon: <svg>...</svg>, current: true },
    { name: 'Team', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Projects', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Calendar', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Documents', href: '#', icon: <svg>...</svg>, current: false },
    { name: 'Reports', href: '#', icon: <svg>...</svg>, current: false },
  ];
  
  const secondaryNavigation = [
    { name: 'Website redesign', href: '#' },
    { name: 'GraphQL API', href: '#' },
    { name: 'Customer migration guides', href: '#' },
    { name: 'Profit sharing program', href: '#' },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
export default function Example() {
  const [open, setOpen] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <AppShell
    sidebar={
      <HStack spacing="0" alignItems="stretch">
        <Sidebar variant="condensed" bg="purple.500" borderWidth="0" spacing="3">
          <SidebarSection>
            <Image
              src="https://saas-ui.dev/favicons/favicon-96x96.png"
              boxSize="7"
            />
          </SidebarSection>
          <SidebarSection>
            <NavItem >Home</NavItem>
            <NavItem isActive>
              Users
            </NavItem>
            <NavItem >
              Settings
            </NavItem>
          </SidebarSection>
        </Sidebar>
        <Sidebar>
          <SidebarSection direction="row" mt="2" px="4">
            <Heading size="sm" fontWeight="semibold">
              Users
            </Heading>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto">
            <NavGroup>
              <NavItem isActive>
                Overview
              </NavItem>
            </NavGroup>
  
            <NavGroup title="Teams" isCollapsible>
              <NavItem>Sales</NavItem>
              <NavItem>Support</NavItem>
            </NavGroup>
  
            <NavGroup title="Tags" isCollapsible>
              <NavItem
                
              >
                <Text>Lead</Text>
                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                  83
                </Badge>
              </NavItem>
              <NavItem
             
              >
                <Text>Customer</Text>
                <Badge opacity="0.6" borderRadius="full" bg="none" ms="auto">
                  210
                </Badge>
              </NavItem>
            </NavGroup>
          </SidebarSection>
          <SidebarSection>
            <NavItem>Documentation</NavItem>
          </SidebarSection>
        </Sidebar>
      </HStack>
    }
  />
  )
}
