import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>dcdevs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <h1>Pagina Home</h1>
      </Layout>
    </div>
  )
}