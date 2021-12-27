import "rsuite/dist/rsuite.min.css";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import { AuthProvider } from "../auth/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
