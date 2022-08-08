import Link from "next/link";
import styles from "./Navbar.module.scss";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const menuItems = ["Home"];

  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>StrapiBlog</h2>
      {menuItems.map((item) => (
        <Link key={item} href={item !== "Home" ? `/${item.toLowerCase()}` : "/"}>
          <a>{item}</a>
        </Link>
      ))}
    </nav>
  );
}
