import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Hello Next World!</h1>
      <ul>
        <li>
          <Link href="portfolio">portfolio</Link>
        </li>
        <li>
          <Link href="clients">clients</Link>
        </li>
      </ul>
    </div>
  );
}