import { useState } from "react";
import styles from "../styles/insights.module.css";
import CardInsights from "./CardInsights";

export default function Insights(props) {
  const [counter, setCounter] = useState(0);

  const radioArray = [0, 1, 2];

  const radioDisplay = radioArray.map((item) => (
    <button
      className={styles.radio}
      key={item}
      onClick={() => setCounter(item)}
      style={{ backgroundColor: item === counter ? " #b7b7b7" : "transparent" }}
    />
  ));

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>ACME Insights</h2>
      <p className={styles.paragraph}>
        How are factors being used around the world?
      </p>
      <div className={styles.carousel}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${counter * 400}px)` }}
        >
          <CardInsights
            color="#1450d2"
            image="/hikeOne.png"
            text="Global Factor|Investing Study"
          />
          <CardInsights
            color="#01a49c"
            image="/hikeTwo.png"
            text="2019|Outlook"
          />
          <CardInsights
            color="#009bfa"
            image="/hikeThree.png"
            text="Capital Market|Assumption"
          />
        </div>
      </div>
      <div className={styles.navigation}>{radioDisplay}</div>
    </section>
  );
}
