import { NavLinkProps } from '../components/nav-link'

const hideMobile = {
  // display: ['none', null, 'block'],
}

const headerNav: NavLinkProps[] = [
  { id: 'home', label: 'Home', display: 'none' },
  { id: 'features', label: 'Features', ...hideMobile },
 
  {
    href: '/blog',
    label: 'Pricing',
    ...hideMobile,
  },
  { href: 'https://workspace.unlimitpotential.com/', label: 'Sign in', ...hideMobile },
  { href: 'https://developers.unlimitednow.me/', label: 'Documentation', ...hideMobile },
  {
    href: '/demo',
    label: 'Receive Demo',
    variant: 'solid',
    colorScheme: 'primary',
    fontSize: 'sm',
  },
]

export default headerNav
