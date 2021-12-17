import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import "../auth/config/firebase.config";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
