import Image from "next/image";
import styles from "../styles/Footer.module.css";
import React, { Component, Fragment } from "react";

class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.card}>
            <div className={styles.weblogo}>
              <Image src="/img/WebLogo.png" alt="" width={40} height={40} />
            </div>
            <h1 className={styles.title}>global205.com</h1>
            <p className={styles.text}></p>
            <p className={styles.text}></p>
            <p className={styles.text}></p>
            <p className={styles.text}></p>
          </div>
          <div className={styles.card}>
            <h1 className={styles.title}></h1>
            <p className={styles.text}></p>
            <p className={styles.text}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
