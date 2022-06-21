import Head from 'next/head'

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
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          margin:0;
          padding:0;
          box-sizing: border-box;
        }
        .container{
          width:1400px;
          max-width:100%;
          margin:0 auto;
        }
      `}</style>
    </div>
  )
}
