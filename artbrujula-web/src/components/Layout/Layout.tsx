import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import styles from "../../styles/global.module.scss";
import WhatsAppButton from "../ChatComponent/ChatComponent";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
        <WhatsAppButton />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
