import styles from "../styles/cardInsights.module.css";

export default function CardInsights(props) {
  const { color, image, text } = props;
  const cardText = text.split("|");

  return (
    <div className={styles.container} style={{ borderColor: color }}>
      <img className={styles.image} src={image} />
      <p className={styles.header} style={{ color }}>
        {cardText[0]}
        <br />
        {cardText[1]}
      </p>
    </div>
  );
}
