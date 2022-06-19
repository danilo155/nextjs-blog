import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>My Pages</title>
        <meta href='../public/favicon.ico' />
      </Head>

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
      `}</style>
    </div>
  )
}
