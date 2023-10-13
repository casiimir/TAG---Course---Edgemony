import MainSection from "./components/mainSection";
import Sidebar from "./components/sidebar";
import styles from "@/styles/Dashboard.module.scss";

export default function Dashboard() {
  return (
    <section className={styles.Dashboard}>
      <Sidebar />
      <MainSection title="Nice! We have a lot of orders" />
    </section>
  );
}
