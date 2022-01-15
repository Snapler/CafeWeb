import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleClick = (e, path) => {
    if (path === "/") {
      router.push("/");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.item}>
          <ul className={styles.list}>
            <div className={styles.space}></div>
            <Link href="/">
              <li
                onClick={(e) => handleClick(e, "/")}
                className={styles.listItem}
              >
                Home
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={(e) => handleClick(e, "/services")}
                className={styles.listItem}
              >
                Services
              </li>
            </Link>
            <Link href="/products">
              <li
                onClick={(e) => handleClick(e, "/products")}
                className={styles.listItem}
              >
                Product
              </li>
            </Link>
            <Link href="/aboutus">
              <li
                onClick={(e) => handleClick(e, "/aboutus")}
                className={styles.listItem}
              >
                About Us
              </li>
            </Link>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
