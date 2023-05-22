import { Box, Kbd } from '@chakra-ui/react'
import {
  CommandBar,
  CommandBarContent,
  CommandBarDialog,
  CommandBarEmpty,
  CommandBarGroup,
  CommandBarInput,
  CommandBarItem,
  CommandBarList,
} from '@saas-ui/command-bar'

import coreSidebar from '../../data/core-sidebar'
import componentsSidebar from '../../data/components-sidebar'
import hookSidebar from '../../data/hooks-sidebar'
import proSidebar from '../../data/pro-sidebar'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

const items = [
  {
    title: 'Getting started',
    items: coreSidebar.routes,
  },
  {
    title: 'Resources',
    items: componentsSidebar.routes,
  },
  {
    title: 'For Creators',
    items: hookSidebar.routes,
  },
  {
    title: 'Seller Tools',
    items: proSidebar.routes,
  },
]


export const GlobalSearch = (props: any) => {
  const { onClose } = props
  const router = useRouter()
  return (
    <CommandBar {...props}>
      <CommandBarDialog>
        <CommandBarContent>
          <CommandBarInput placeholder="Search" autoFocus />

          <CommandBarList px="2">
            <CommandBarEmpty>No results found.</CommandBarEmpty>

            {items.map(({ title, items }) => {
              return (
                <CommandBarGroup key={title} heading={title}>
                  {items.map(
                    ({
                      icon,
                      title,
                      heading,
                      path,
                      action,
                      shortcut,
                      routes,
                    }: any) => {
                      return (
                        <Fragment key={path + title}>
                          <CommandBarItem
                            value={path}
                            isDisabled={heading}
                            _disabled={{
                              color: 'muted',
                              fontWeight: 'semibold',
                              bg: 'transparent',
                            }}
                            borderRadius="md"
                            onSelect={() => {
                              if (heading) {
                                return
                              } else if (path) {
                                router.push(path)
                              } else if (action) {
                                action()
                              }
                              onClose()
                            }}
                          >
                            {icon}
                            {title}
                            {shortcut && (
                              <Box ms="auto">
                                {shortcut.map((key: any) => {
                                  return <Kbd key={key}>{key}</Kbd>
                                })}
                              </Box>
                            )}
                          </CommandBarItem>

                          {routes?.map(({ title, path, action }: any, i: any) => {
                            return (
                              <CommandBarItem
                                key={i}
                                value={path}
                                borderRadius="md"
                                onSelect={() => {
                                  if (path) {
                                    router.push(path)
                                  } else if (action) {
                                    action()
                                  }
                                  onClose()
                                }}
                              >
                                {title}
                              </CommandBarItem>
                            )
                          })}
                        </Fragment>
                      )
                    }
                  )}
                </CommandBarGroup>
              )
            })}
          </CommandBarList>
        </CommandBarContent>
      </CommandBarDialog>
    </CommandBar>
  )
}
