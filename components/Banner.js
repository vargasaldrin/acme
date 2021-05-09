import styles from "../styles/banner.module.css";

export default function Banner(props) {
  return (
    <section className={styles.container}>
      <p className={styles.preHeader}>Research Professional Platform</p>
      <h2 className={styles.header}>
        <span className={styles.subHeader}>ACME Wealth</span>
        <br />
        Management Platform
      </h2>
      <hr />
      <p className={styles.paragraph}>
        Investment excellence.
        <br />
        Diversity of though.
        <br />
        Organizational Strength.
      </p>
    </section>
  );
}
