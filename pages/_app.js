import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import { AuthProvider } from "../auth/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
