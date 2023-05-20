import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { SaasProvider } from '@saas-ui/react';
import { AppProps } from 'next/app';
import {Footer} from '../components/layouts/footer'
import Link from 'next/link';
import Layout2 from '../components/layouts';
import "../styles/globals.css";

import { builder } from '@builder.io/react';
import { AuthProvider } from '@saas-ui/react'
import { ClerkProvider } from '@clerk/nextjs'

builder.init('a480daf8d0e34c12bcc3f48f0079ed71');

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const MyApp = ({ Component, pageProps }: AppProps<any>) => {
  return (    <ClerkProvider>

    <ChakraProvider theme={theme}>
           

      <SaasProvider linkComponent={Link}> <AuthProvider>
        <Layout2
          announcement={pageProps.announcement}
          header={pageProps.header}
          footer={undefined}
        >   

          <LazyMotion features={domAnimation}>
            <Component {...pageProps} />
          </LazyMotion>
          <Footer />      
        </Layout2>      </AuthProvider>

      </SaasProvider>
    </ChakraProvider>    </ClerkProvider>

  );
};

export default MyApp;
