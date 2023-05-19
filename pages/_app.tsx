export interface AppRenderProps {
  pageProps: object
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter
}
import type { NextComponentType, NextPageContext } from 'next'
import type { NextRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/layouts'
import { AppProps } from 'next/app'
import Footer from '../components/layouts/footer'

import { SaasProvider } from '@saas-ui/react'

const MyApp = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <SaasProvider linkComponent={Link}>
         <Layout
            announcement={pageProps.announcement}
            header={pageProps.header}
            footer={pageProps.footer !== false ? <Footer /> : null}
          >
      <Component {...pageProps} /></Layout>
    </SaasProvider>
  )
}
export default MyApp
