import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Pages</title>
        <meta href='../public/favicon.ico' />
      </Head>
      <main>
        <div className="container">
          <h1>Hello World</h1>
          <Link href="/About">
            <a>About</a>
          </Link>
        </div>
      </main>
     
    </div>
  )
}
