import styles from "../styles/cardEvent.module.css";

export default function CardEvents(props) {
  const { location, number, month, tagline, title } = props;

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {month}
        <br />
        <span className={styles.dateNumber}>{number}</span>
      </div>
      <div className={styles.information}>
        <h3>{title}</h3>
        <p>{tagline}</p>
      </div>
      <button>Get More Insight</button>
      <p className={styles.location}>{location}</p>
    </div>
  );
}
