import { Layout } from '@/components/Layout'
import store from '@/slices/store';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { SessionProvider } from 'next-auth/react';
import ClientStateProvider from '@/components/clientStateProvider';

const persistor = persistStore(store);

export default function App({ Component, pageProps: { session, ...pageProps }, router }: AppProps) {
  const layOutSettings: boolean = router.pathname === '/';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <SessionProvider session={session}>
          <ClientStateProvider>
            <Layout settings={layOutSettings}>
              <Component {...pageProps} />
            </Layout>
          </ClientStateProvider>
        </SessionProvider>
      </PersistGate>
    </Provider>
  )
}