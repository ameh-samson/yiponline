import styles from "./ContactUs.module.scss";
import Whatsapp from "./Whatsapp/Whatsapp";

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactUsTitleContainer}>
          <h1>Support</h1>
        </div>

        <div className={styles.ContactUsContent}>
          <h2>Curious About our Products?</h2>
          <p>YIP is ready and able to make magic for your business.</p>
        </div>

        <div className={styles.contactDetailsGrid}>
          <Whatsapp />
        </div>

        <div className={styles.sendUsAmessageContainer}></div>
      </div>
    </section>
  );
};

export default ContactUs;
