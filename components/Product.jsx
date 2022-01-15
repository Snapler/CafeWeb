import styles from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

function Product() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ours Products</h1>
      <div className={styles.wrapper}>
        <Link href="/products">
          <div className={styles.ProductList}>
            <h1 id="FirstProductTitle" className={styles.ProductTitle}>
              อุปกรณ์สำหรับคาเฟ่
            </h1>
            <Image
              src="/img/CoffeMachine.png"
              alt=""
              width={"100px"}
              height={"100px"}
            />
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque iure expedita in ex sapiente
            </p>
          </div>
        </Link>
        <Link href="/products">
          <div className={styles.ProductList}>
            <h1 id="FirstProductTitle" className={styles.ProductTitle}>
              วัตถุดิบสำหรับคาเฟ่
            </h1>
            <Image
              src="/img/coffee-pack.png"
              alt=""
              width={"100px"}
              height={"100px"}
            />
            <p className={styles.desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque iure expedita in ex sapiente
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Product;
