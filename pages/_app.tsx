import Layout from '@/components/Layout/Layout'
import store from '@/slices/store';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps, router }: AppProps) {
  const layOutSettings: boolean = router.pathname === '/';

  return (
    <Provider store={store}>
      <Layout settings={layOutSettings}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
