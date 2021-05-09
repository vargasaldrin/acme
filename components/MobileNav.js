import { useState, useEffect } from "react";
import styles from "../styles/mobileNav.module.css";

export default function MobileNav(pros) {
  const [toggle, setToggle] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const value = toggle ? "flex" : "none";
    setDisplay(value);
  }, [toggle]);

  return (
    <section className={styles.container}>
      <div className={styles.head}>
        <img className={styles.logo} src="/logoMobile.png" />
        <a className={styles.menu} onClick={handleClick}>
          <img src="/outline_menu_black_24dp.png" />
        </a>
      </div>
      <ul className={styles.navigation} style={{ display }}>
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
      <div className={styles.shade} style={{ display }}></div>
    </section>
  );
}
