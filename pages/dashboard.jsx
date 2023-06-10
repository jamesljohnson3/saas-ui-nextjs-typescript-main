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
    sidebar={
      <HStack spacing="0" alignItems="stretch">
       
        <Sidebar variant="condensed" bg="purple.500" borderWidth="0" spacing="3">
          <SidebarSection>
            <Image
              src="https://res.cloudinary.com/unlimitpotential/image/upload/v1681782877/avatar_keu03k.png"
              boxSize="7"
            />
          </SidebarSection>
          <SidebarSection>
          <NavItem icon={<svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ffffff"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>} onClick={() => handleNavItemClick('https://console.unlimitpotential.com/edit-testing')}>Home</NavItem>
              <NavItem icon={        <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ffffff"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>}  isActive onClick={() => handleNavItemClick('https://console.unlimitpotential.com/edit-testing')}>
              Overview
            </NavItem>
            <NavItem icon={<svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 opacity-75"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffffff"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
} onClick={() => handleNavItemClick('https://accounts.unlimitpotential.com/settings')}>
              Settings
            </NavItem>
          </SidebarSection>
        </Sidebar>
        <Sidebar>
          <SidebarSection direction="row" mt="2" px="4">
            <Heading size="sm" fontWeight="semibold">
              Creator Mode
            </Heading>
          </SidebarSection>
          <SidebarSection flex="1" overflowY="auto">
            <NavGroup>
              <NavItem isActive>
                Dashboard
              </NavItem>
            </NavGroup>
  
            <NavGroup title="Studio" isCollapsible>
              <NavItem onClick={() => handleNavItemClick('https://studio.unlimitpotential.com/websites')}>Websites</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://console.unlimitpotential.com/')}>Channels</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://connect.unlimitpotential.com/leads')}>Customers</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://connect.unlimitpotential.com/')}>Campaigns</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://lillieai-betav1b.unlimitpotential.com/')}> Connections</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://workspace.unlimitpotential.com/dashboard')}>Toolkits</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://space.unlimitpotential.com/blueprints')}>Blueprints</NavItem>
              <NavItem onClick={() => handleNavItemClick('https://lillieai-betav1b.unlimitpotential.com/')}>Seller Tools</NavItem>
            </NavGroup>
  
            <NavGroup title="Projects" isCollapsible>
             
            <div className="space-y-1">
            <a                   className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
 href="https://workspace.unlimitpotential.com/dashboard">
     + New
      </a>
            <div className="space-y-1" role="group" aria-labelledby="projects-headline">
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              ))} <a href="https://connect.unlimitpotential.com/" className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
              See more
            </a>
            </div> </div>
            </NavGroup>
          </SidebarSection>
          <SidebarSection>
            <NavItem>          <ThemeToggle/>    </NavItem>
          </SidebarSection>
        </Sidebar>
      </HStack>
      
    }
    >
      <Box as="main" flex="1" py="2" px="4" overflowY="auto">
         {/* Desktop nav area */}
         <div className="hidden md:min-w-0 md:flex-1 md:flex md:items-center md:justify-between">
            <div className="min-w-0 flex-1">
              <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
               
               
               
               

              </div>
            </div>
            <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
              <nav aria-label="Global" className="flex space-x-10">
                <a href="#" className="text-sm font-medium text-gray-900">
                  Inboxes
                </a>
                <a href="#" className="text-sm font-medium text-gray-900">
                  Reporting
                </a>
                <a href="#" className="text-sm font-medium text-gray-900">
                  Settings
                </a>
              </nav>
              <div className="flex items-center space-x-8">
                <span className="inline-flex">
                  <a href="#" className="-mx-1 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>


                  </a>
                </span>

                <Menu as="div" className="relative inline-block text-left">
                  <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://res.cloudinary.com/unlimitpotential/image/upload/v1681782877/avatar_keu03k.png" alt="" />
                  </Menu.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute z-30 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              Sign Out
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
 {/* Main area */}
 <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="min-w-0 flex-1 h-full flex flex-col overflow-y-auto lg:order-last"
            >
              <h1 id="primary-heading" className="sr-only">
                Home
              </h1>
              {/* Your content */}
              Heelo
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <aside className="hidden lg:block lg:flex-shrink-0 lg:order-first">
              <div className="h-full relative flex flex-col w-96 border-r border-gray-200 bg-gray-100 overflow-y-auto">
                {/* Your content */}
                World
              </div>
            </aside>
          </main>      </Box>
    </AppShell>
 
  )
}
