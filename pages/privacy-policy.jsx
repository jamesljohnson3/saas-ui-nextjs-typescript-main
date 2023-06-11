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
  <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        
  <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        LAST UPDATED: AUGUST 31, 2021
      </p>
      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the Privacy Policy Generator.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">Interpretation and Definitions</h2>
      <p>
        InterpretationThe words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>
      <h2 className="text-xl font-bold mt-8 mb-4">Definitions</h2>
      <p>
        For the purposes of this Privacy Policy:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>
          <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
        </li>
        <li>
          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Unlimit Potential, 150 Greenview Boulevard.
        </li>
        <li>
          <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
        </li>
        <li>
          <strong>Country</strong> refers to: Georgia, United States
        </li>
        <li>
          <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
        </li>
        <li>
          <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.
        </li>
        <li>
          <strong>Service</strong> refers to the Website.
        </li>
        <li>
          <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
        </li>
        <li>
          <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
        </li>
        <li>
          <strong>Website</strong> refers to Unlimit Potential, accessible from https://unlimitpotential.com
        </li>
        </ul>  </div>
        </main>  </Box>
</AppShell>
 
  )
}
