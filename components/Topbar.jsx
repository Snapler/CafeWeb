import Image from "next/image";
import styles from "../styles/Topbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Topbar() {
  const router = useRouter();

  const handleClick = (e, path) => {
    if (path === "/") {
      router.push("/");
    }
  };
  return (
    <div className={styles.container}>
      <Image
        className={styles.Logo}
        src="/img/GlobalLogo.png"
        alt=""
        width={"80"}
        height={"70"}
      />
      <Link href="/">
        <div className={styles.Logoimage}>
          <Image
            src="/img/SERMIND_CAFE.png"
            alt=""
            layout={"responsive"}
            width={"120"}
            height={"120"}
          />
        </div>
      </Link>
      <div className={styles.Top}>
        <button
          onClick={(e) => handleClick(e, "/contact")}
          className={styles.Button}
        >
          <Link href="/contact">Contact</Link>
          {""}
        </button>
      </div>
    </div>
  );
}

export default Topbar;
