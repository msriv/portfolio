import "../styles/globals.css";
import { AppProps } from "next/app";
import { Flipper, Flipped } from "react-flip-toolkit";
import GoToHome from "../components/common/GoToHome";
require("typeface-poppins");

function CustomApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <Flipper spring="veryGentle" flipKey={router.asPath}>
      <Flipped flipId="page">
        <div>
          <Component {...pageProps} />
          {router.asPath === "/" ? null : <GoToHome />}
        </div>
      </Flipped>
    </Flipper>
  );
}

export default CustomApp;
