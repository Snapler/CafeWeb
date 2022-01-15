import styles from "../styles/Featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Featured = () => {
  const router = useRouter();

  const handleClick = (e, path) => {
    if (path === "/") {
      router.push("/");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <text className={styles.title}>เว็บไซต์ที่ครบวงจร {"\n"}</text>
          <text className={styles.title}>
            สำหรับผู้ที่สนใจการทำธุรกิจด้านอาหารและเครื่องดื่ม
          </text>
          <div>
            <button
              onClick={(e) => handleClick(e, "/")}
              className={styles.Button}
            >
              <Link href="/">Explore</Link>
              {""}
            </button>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.img}>
            <img
              src="/img/SermindCafe.jpg"
              alt="SermindCafe"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
