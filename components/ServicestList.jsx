import styles from "../styles/ServicesList.module.css";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>บริการของเรา</h1>
      <div className={styles.wrapper}>
        <ServicesCard title={"ปรึกษาและออกแบบธีมร้าน"}>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            aut alias asperiores eius temporibus
          </p>
        </ServicesCard>
        <ServicesCard title={"รับเหมาก่อสร้างทั้งระบบ"}>
          <p className={styles.desc}>
            ในเครือของเรา
            เรามีบริการรับเหมาก่อสร้างทั้งระบบเพื่อรองรับการก่อสร้างร้านตามแบบที่คุณต้องการ
          </p>
        </ServicesCard>
        <ServicesCard title={"ปรึกษาและจำหน่ายอุปกรณ์ร้าน"}>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            aut alias asperiores eius temporibus repellendus?
          </p>{" "}
        </ServicesCard>
        <ServicesCard title={"ปรึกษารูปแบบเมนูต่างๆ"}>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            aut alias asperiores eius temporibus repellendus?
          </p>
        </ServicesCard>
        <ServicesCard title={"รับฝึกอบรมพนักงาน"}>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            aut alias asperiores eius temporibus repellendus?
          </p>
        </ServicesCard>
      </div>
    </div>
  );
};

export default ServicesList;
