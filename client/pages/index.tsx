import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Fragment } from 'react'
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mihir Srivastava</title>
      </Head>
      <Navbar/>
    </Fragment>
  )
}
