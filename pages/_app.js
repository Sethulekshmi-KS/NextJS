import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '/styles/header.css'
import '/styles/register.css'
import '/styles/footer.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

