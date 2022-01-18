import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.scss";
import "../styles/sidebar.scss";
import "../styles/topbar.scss";
import "../styles/dashboard.scss";
import "../styles/profile.scss";
import "../styles/wallet.scss";
import "../styles/settings.scss";
import "../styles/form.scss";
import "../styles/deposit.scss";
import "../styles/portfolio.scss";
import "../styles/loan.scss";
import "../styles/transaction.scss";
import { AuthProvider } from "../auth/useAuth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
