import Head from "next/head"
import Link from "next/dist/client/link"
export default function About() {
    return (
        <>
            <Head>
                <title>My About</title>
            </Head>
            <div className="container">
                <h1>
                    Welcome to my About
                </h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
        </>
    )
};
