import styles from "./ContactCard.module.scss";

const ContactCard = ({ link, icon, title, details, contactInfo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.details}>{details}</span>

        {Array.isArray(contactInfo) ? (
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <a href="">{info}</a>
              </li>
            ))}
          </ul>
        ) : (
          <a href={link}>
            <p>{contactInfo}</p>
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
