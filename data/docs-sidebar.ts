import { RouteItem } from './get-route-context'

import {
  FiBookOpen,
  FiAnchor,
} from 'react-icons/fi'

const sidebar = {
  routes: [
    {
      title: 'Introduction',
      path: '/docs',
      icon: FiBookOpen,
    },
    
    
    {
      title: 'Hooks',
      path: '/docs/hooks',
      icon: FiAnchor,
      heading: true,
      routes: [
        {
          title: 'useCollapse',
          path: '/docs/hooks/use-collapse',
        },
        {
          title: 'useLocalStorage',
          path: '/docs/hooks/use-local-storage',
        },
      ],
    },
  ] as RouteItem[],
}

export default sidebar
