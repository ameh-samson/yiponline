import { useGlobalContext } from "../Context/Context";
import styles from "./Card.module.scss";

const Card = ({ title, content, imageUrl }) => {
  const { ref, inView } = useGlobalContext();

  return (
    <div className={`${styles.card} ${inView ? styles.appear : ""}`}>
      <img src={imageUrl} alt="" />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        {content ? <p>{content}</p> : ""}
      </div>
    </div>
  );
};

export default Card;
