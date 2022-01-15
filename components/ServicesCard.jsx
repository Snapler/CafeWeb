import Image from "next/image";
import styles from "../styles/ServicesCard.module.css";

const ServicesCard = ({ children, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.CardBox}>
        <h1 className={styles.title}>{title}</h1>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
