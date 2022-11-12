import GlobalStyles from '../styles/globals';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default MyApp
