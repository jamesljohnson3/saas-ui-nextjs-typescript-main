import { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/react'


type Props = {
  children?: ReactNode
  title?: string
}

export const Layout = ({
  children,
  title = 'This is the default title',
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Container maxWidth="1200px">
    <nav
  aria-label="Site Nav"
  className="mx-auto flex max-w-3xl items-center justify-between p-4"
>
  <a
    href="/"
    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100"
  >
    <span className="sr-only">Logo</span>
    👋
  </a>

  <ul className="flex items-center gap-2 text-sm font-medium text-gray-500">
    <li className="hidden lg:block">
      <a className="rounded-lg px-3 py-2" href="/"> Home </a>
    </li>

    <li><a className="rounded-lg px-3 py-2" href=""> Projects </a></li>

    <li>
      <a
        className="inline-flex items-center gap-2 rounded-lg px-3 py-2"
        href=""
        target="_blank"
      >
        External

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          ></path>
        </svg>
      </a>
    </li>
  </ul>
</nav>
      {children}
    </Container>
  </div>
)
