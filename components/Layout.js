import Head from "next/head";
const Layout = ({ title, description, children }) => {
    return (
      <>
    <Head>
        <title>{title}</title>
        <meta name="description"
        content={description}
        />
        </Head>
    </>  
    )
    
};

export default Layout