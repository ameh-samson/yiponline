import styles from "./ContactCard.module.scss";

const ContactCard = ({ icon, title, details, contactInfo }) => {
  return (
    <div className={styles.card}>
      {icon && <span>{icon}</span>}
      <h2>{title}</h2>
      <span>{details}</span>
      <h2>{contactInfo}</h2>
    </div>
  );
};

export default ContactCard;
