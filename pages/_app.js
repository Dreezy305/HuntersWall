import "../styles/globals.css";
import "../styles/base.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/sidebar.scss";
import "../styles/topbar.scss";
import "../styles/dashboard.scss";
import "../styles/profile.scss";
import { AuthProvider } from "../auth/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
