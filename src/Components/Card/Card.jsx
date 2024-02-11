import styles from "./Card.module.scss";

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="" />
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        {content ? <p>{content}</p> : ""}
      </div>
    </div>
  );
};

export default Card;
