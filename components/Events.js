import { useState } from "react";
import CardEvent from "./CardEvent";
import styles from "../styles/events.module.css";

export default function UpcomingEvents(props) {
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
      <h2 className={styles.header}>Upcoming Events</h2>
      <p className={styles.tagline}>
        This needs a great tagline, but I'll fix it in later
      </p>
      <div className={styles.carousel}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${counter * 400}px)` }}
        >
          <CardEvent
            location="Chicago, IL"
            number="28"
            month="JAN"
            tagline="Join us for this conference showcasing innovation."
            title="Insight Exchange Network"
          />
          <CardEvent
            location="The Wagner, New York"
            number="12"
            month="FEB"
            tagline="Find out how banks are responsinding to the changing future of interest..."
            title="Citywide Buyer's Retreat"
          />
          <CardEvent
            location="London, England"
            number="6"
            month="MAY"
            tagline="Find the best online resources to help with your investments..."
            title="Research Exchange"
          />
        </div>
      </div>
      <div className={styles.navigation}>{radioDisplay}</div>
      <img className={styles.logo} src="/logoAlternate.png" />
    </section>
  );
}
