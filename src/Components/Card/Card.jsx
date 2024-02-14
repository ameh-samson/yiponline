import styles from "./Card.module.scss";
import { useInView } from "react-intersection-observer";

const Card = ({ title, content, imageUrl, linkUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.appear : ""}`}>
      <img src={imageUrl} alt="" />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        {content ? <p>{content}</p> : ""}
      </div>

      {linkUrl ? (
        <div>
          <a href={linkUrl}>Visit +</a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
