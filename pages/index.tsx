import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomePage from '@/components/HomePage/HomePage'
import { Provider } from 'react-redux';
import store from '@/slices/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  )
}
