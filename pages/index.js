import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>BIT-D</title>  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a href="/login">Login</a>

    </div>
  )
}
