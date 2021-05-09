import styles from "../styles/footer.module.css";

export default function Footer(props) {
  return (
    <section className={styles.container}>
      <div className={styles.desktop}>
        <div>
          Call us at 111-222-3333
          <br />
          for more information
        </div>
        <div className={styles.social}>
          Social Share
          <img src="/twitter.png" />
          <img src="/facebook.png" />
          <img src="/linkedin.png" />
          <img src="/email.png" />
        </div>
      </div>
      <div className={styles.mobile}>
        <div className={styles.top}>
          <button>Privacy Policy</button>
          <button>Terms of Use</button>
        </div>
        <p>Site Links</p>
        <button>Home</button>
        <button>About Us</button>
        <button>Insights</button>
        <button>Events</button>
        <button>Home</button>
        <button>Due Diligence</button>
        <button>Contact Us</button>
      </div>
    </section>
  );
}
