import ContentSection from "../contentSection";
import InfoSection from "../infoSection";
import styles from "./index.module.scss";

const MainSection = ({ title }: { title: string }) => {
  return (
    <div className={styles.MainSection}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <ContentSection />
        <InfoSection />
      </div>
    </div>
  );
};

export default MainSection;
