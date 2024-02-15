import styles from "./ContactCard.module.scss";
import { useInView } from "react-intersection-observer";

const ContactCard = ({ link, icon, title, details, contactInfo }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.appear : ""}`}>
      <div className={styles.cardContainer}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.details}>{details}</span>

        {Array.isArray(contactInfo) ? (
          <ul>
            {contactInfo.map((info, index) => (
              <li key={index}>
                <a href={`tel:${info}`}>{info}</a>
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
