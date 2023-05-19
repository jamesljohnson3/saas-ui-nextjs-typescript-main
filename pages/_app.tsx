import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { SaasProvider } from '@saas-ui/react';
import { AppProps } from 'next/app';
import {Footer} from '../components/layouts/footer'
import Link from 'next/link';
import Layout from '../components/layouts';
import '../styles/css/variables.css';
import '../styles/css/global.css';
import '../styles/css/scrollbar.css';
import "../styles/globals.css";
import { builder } from '@builder.io/react';

builder.init('a480daf8d0e34c12bcc3f48f0079ed71');

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const MyApp = ({ Component, pageProps }: AppProps<any>) => {
  return (
    <ChakraProvider theme={theme}>
      <SaasProvider linkComponent={Link}>
        <Layout
          announcement={pageProps.announcement}
          header={pageProps.header}
          footer={undefined}
        >
          <LazyMotion features={domAnimation}>
            <Component {...pageProps} />
          </LazyMotion>
          <Footer />
        </Layout>
      </SaasProvider>
    </ChakraProvider>
  );
};

export default MyApp;
