import '../styles/globals.scss'
import ScreenSizeProvider from "../context/ScreenSizeProvider";


function MyApp({ Component, pageProps }) {
  return (
      <ScreenSizeProvider>
        <Component {...pageProps} />
      </ScreenSizeProvider>

  );
}

export default MyApp
