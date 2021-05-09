import styles from "../styles/commitment.module.css";

export default function Commitment(props) {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Our Commitment to Professionals</h2>
      <p className={styles.text}>
        We help our partners deliver industry leading results with a commitment
        to excellence, though-provoking insights and experience distribution. We
        are laser focused on our shared goal — helping clients achieve their
        objectives.
      </p>
      <div>
        <button className={styles.button}>Contact Us</button>
      </div>
    </section>
  );
}
