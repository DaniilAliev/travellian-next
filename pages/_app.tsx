import Layout from '@/components/Layout/Layout'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps, router }: AppProps) {
  const layOutSettings: boolean = router.pathname === '/';

  return (
    
    <Layout settings={layOutSettings}>
      <Component {...pageProps} />
    </Layout>
  )
}
