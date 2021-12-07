import styles from "../styles/Home.module.scss";
import Layout from "../layouts";
import AboutUs from "./aboutUs";
import Home from "./home";

export default function Index() {
  return (
    <Layout>
      <Home />
      {/* <AboutUs /> */}
    </Layout>
  );
}
