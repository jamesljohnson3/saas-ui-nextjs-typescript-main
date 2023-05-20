import { AppShell } from '@saas-ui/app-shell'
import {
    Sidebar,
    SidebarSection,
    NavItem,
  } from '@saas-ui/sidebar'
  import { Box, SimpleGrid,
  } from '@chakra-ui/react'



export default function Dash() {


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
  
</SimpleGrid>  </Box>
</AppShell>
    </>
  );
}
