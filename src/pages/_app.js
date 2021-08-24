import Layout from '@/components/layout/layout'
import store from '@/store/index'
import '@/styles/globals.scss'
import 'node_modules/bootstrap/scss/bootstrap.scss'
import React from 'react'
import { Provider } from 'react-redux'

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
