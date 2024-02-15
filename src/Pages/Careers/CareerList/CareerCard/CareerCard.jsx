import styles from "./CareerCard.module.scss";

const CareerCard = ({
  title = "Default Title",
  intro,
  location,
  qualification,
}) => {
  console.log(title);

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>{intro}</p>
          <span>LOCATION: {location}</span>
          <p>
            <span>QUALIFICATION:</span>
            {qualification}
          </p>

          <button>Details</button>
        </div>

        <div className={styles.moreContent}></div>
      </div>
    </div>
  );
};

export default CareerCard;
