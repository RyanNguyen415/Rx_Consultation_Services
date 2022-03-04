import Navbar from '../components/Navbar'
import Head from 'next/head'
import '../styles/globals.css'
import Context from '../components/context'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Context>
        <Head >
              <meta charSet="UTF-8"/>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <title>Online Doctor</title>
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
        </Head>
        <Navbar/>
        <Component {...pageProps} />
    </Context>
    </>
  )
}

export default MyApp
