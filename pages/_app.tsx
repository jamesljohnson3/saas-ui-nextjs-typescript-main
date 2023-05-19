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
import {Footer} from '../components/layouts/footer'

import { LazyMotion, domAnimation } from "framer-motion"

import { SaasProvider } from '@saas-ui/react'
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/scrollbar.css';
import "../styles/globals.css";

import { builder } from '@builder.io/react'

builder.init('a480daf8d0e34c12bcc3f48f0079ed71')

const MyApp = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <SaasProvider linkComponent={Link}>
         <Layout
        announcement={pageProps.announcement}
        header={pageProps.header} footer={undefined}
          >
               
       <LazyMotion features={domAnimation}>
      <Component {...pageProps} /></LazyMotion><Footer /></Layout>
    </SaasProvider>
  )
}
export default MyApp
