import Link from "next/dist/client/link"
export default function About() {
    return (
        <>
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
