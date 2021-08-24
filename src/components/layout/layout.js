import styles from "./layout.module.scss";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
