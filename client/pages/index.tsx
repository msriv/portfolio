import Navbar from '../components/Navbar'
import Head from 'next/head'
import { Fragment } from 'react'
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mihir Srivastava</title>
      </Head>
      <Navbar page={"home"}/>
      <div className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-300">  Hi! I am Mihir Srivastava
          </h1>
          <p className="mb-8 leading-relaxed"></p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="/images/home.png" />
        </div>
      </div>
      </div>
    </Fragment>
  )
}
