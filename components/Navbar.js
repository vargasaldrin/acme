import styles from "../styles/navbar.module.css";

export default function Navbar(props) {
  return (
    <section className={styles.container}>
      <img src="/logo.png" />
      <hr className={styles.divider} />
      <ul className={styles.navigation}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Insights</a>
        </li>
        <li>
          <a href="">Events</a>
        </li>
        <li>
          <a href="">Contact Us</a>
        </li>
      </ul>
    </section>
  );
}
