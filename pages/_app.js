import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import "../auth/config/firebase.config";
import { AuthUserProvider } from "../context/authContext";

function MyApp({ Component, pageProps }) {
  return (
    // <AuthUserProvider>
    <Component {...pageProps} />
    // </AuthUserProvider>
  );
}

export default MyApp;
