export interface AppRenderProps {
  pageProps: object
  err?: Error
  Component: NextComponentType<NextPageContext, AppRenderProps, object>
  router: NextRouter
}
import type { NextComponentType, NextPageContext } from 'next'
import type { NextRouter } from 'next/router'
import Link from 'next/link'
import { LazyMotion, domAnimation } from "framer-motion"

import { SaasProvider } from '@saas-ui/react'
import '../styles/css/variables.css'
import '../styles/css/global.css'
import '../styles/css/scrollbar.css';

export default function App({ Component, pageProps }: AppRenderProps) {
  return (
    <SaasProvider linkComponent={Link}>
      <LazyMotion features={domAnimation}>
      <Component {...pageProps} /></LazyMotion>
    </SaasProvider>
  )
}
