import Layout from '@/components/Layout/Layout'
import store from '@/slices/store';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import ClientStateProvider from '@/components/clientStateProvider';

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const layOutSettings: boolean = router.pathname === '/';

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <ClientStateProvider>
          <Layout settings={layOutSettings}>
            <Component {...pageProps} />
          </Layout>
        </ClientStateProvider>
      </SessionProvider>
    </Provider>
  )
}
