import "../styles/globals.scss";
import type { AppProps } from "next/app";
import NavigationBar from "../components/NavigationBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavigationBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
