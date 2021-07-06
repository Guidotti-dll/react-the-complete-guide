import styles from "./styles.module.css";
import MainNavigation from "../MainNavigation";

const Layout = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
