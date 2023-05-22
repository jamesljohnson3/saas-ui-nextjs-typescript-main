import { NextPage } from 'next'
import { BackgroundGradient } from '../components/gradients/background-gradient'
import { Section } from '../components/section'

import { PageTransition } from '../components/motion/page-transition'

const Login: NextPage = () => {
  return (
    <Section height="100vh" innerWidth="container.xl">
      <BackgroundGradient
        zIndex="-1"
        width={{ base: 'full', lg: '50%' }}
        left="auto"
        right="0"
        borderLeftWidth="1px"
        borderColor="gray.200"
        _dark={{
          borderColor: 'gray.700',
        }}
      />
      <PageTransition height="100%" display="flex" alignItems="center">
      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Request a free demo</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>

        <div className="relative">
          <img
            className="mx-auto h-8"
            src="https://res.cloudinary.com/unlimitpotential/image/upload/v1684563172/now_logo-removebg-preview_vcu827.png"
            alt="unlimitednow"
          />
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                &ldquo;We are extremely grateful for all of our friends, family and co-workers who have invested their time, energy and knowledge into getting our ideas off the launchpad!

&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Judith Black</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">CEO, Workcation</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
      </PageTransition>
    </Section>
  )
}

export default Login

export const getStaticProps = () => {
  return {
    props: {
      header: {
        display: 'none',
      },
      footer: {
        borderTopWidth: '1px',
      },
    },
  }
}
