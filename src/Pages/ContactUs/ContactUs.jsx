import Call from "./Call/Call";
import styles from "./ContactUs.module.scss";
import Whatsapp from "./Whatsapp/Whatsapp";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsTitleContainer}>
          <h1 ref={ref} className={`${inView ? styles.appear : ""}`}>
            Support
          </h1>
        </div>

        <div
          ref={ref2}
          className={`${styles.ContactUsContent} ${
            inView2 ? styles.appear : ""
          }`}
        >
          <h2>Curious About our Products?</h2>
          <p>YIP is ready and able to make magic for your business.</p>
        </div>

        <div className={styles.contactDetailsGrid}>
          <div>
            <Whatsapp />
          </div>
          <div>
            <Call />
          </div>
        </div>

        <div className={styles.sendUsAmessageContainer}></div>
      </div>
    </section>
  );
};

export default ContactUs;
