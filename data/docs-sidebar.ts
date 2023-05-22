import { RouteItem } from './get-route-context'

import {
  FiBookOpen,
  FiAnchor,
} from 'react-icons/fi'

const sidebar = {
  routes: [
    {
      title: 'Getting Started',
      path: 'https://unlimitpotential.com/upgrade',
      icon: FiBookOpen,
    },
    
    
    {
      title: 'Maintenance  ',
      path: '/upgrade',
      icon: FiAnchor,
      heading: true,
      routes: [
        {
          title: 'more',
          path: '/en',
        },
       
      ],
    },
  ] as RouteItem[],
}

export default sidebar
