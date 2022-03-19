import type { NextPage } from 'next'
import Head from 'next/head'
import Article from '../components/Article'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main>
        <Article></Article>
      </main>
    </div>
  )
}

export default Home
