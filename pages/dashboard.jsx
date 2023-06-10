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
  import { Box, Badge,Image, Heading, HStack, Flex, Checkbox } from "@chakra-ui/react";
  import ThemeToggle from "../components/layouts/theme-toggle";
  import { useRouter } from 'next/router';
  import { Modal, useModal, Button, Text } from "@nextui-org/react";


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
  const [open, setOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter();
  const { setVisible, bindings } = useModal();

  const handleNavItemClick = (href) => {
    router.push(href);
  };
  return (
    <AppShell
  variant="static"
  minH="100%"
  navbar={
    <Box
      as="header"
      borderBottomWidth="1px"
      py="2"
      px="4"
      position="sticky"
      top="0"
    >
      <SaasUILogo width="100px" />
    </Box>
  }
  sidebar={
    <Sidebar position="sticky" top="40px">
      <SidebarSection>
        <NavItem>Home</NavItem>
        <NavItem>Settings</NavItem>
      </SidebarSection>
    </Sidebar>
  }
>
  <Box as="main" flex="1" py="2" px="4">
    Your application content
  </Box>
</AppShell>
 
  )
}
