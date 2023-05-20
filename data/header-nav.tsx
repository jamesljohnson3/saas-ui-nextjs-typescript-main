import { NavLinkProps } from '../components/nav-link'

const hideMobile = {
  // display: ['none', null, 'block'],
}

const headerNav: NavLinkProps[] = [
  { id: 'home', label: 'Home', display: 'none' },
  { id: 'features', label: 'Features', ...hideMobile },
 
  {
    href: '/pricing',
    label: 'Pricing',
    ...hideMobile,
  },
  { href: '/docs', label: 'Documentation', ...hideMobile },
  {
    href: '/signup',
    label: 'Receive Demo',
    variant: 'solid',
    colorScheme: 'primary',
    fontSize: 'sm',
  },
]

export default headerNav
