import { useGlobalContext } from "../../../../Components/Context/Context";
import styles from "./CareerCard.module.scss";

const CareerCard = ({
  id,
  title = "Default Title",
  intro,
  location,
  qualification,
}) => {
  const { cardStates, toggleDetails } = useGlobalContext();

  const cardState = cardStates[id] || { detailsVisible: false };

  const handleClick = () => {
    toggleDetails(id);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.content}>
          <h3 onClick={handleClick}>{title}</h3>
          {cardState.detailsVisible && (
            <>
              <p>{intro}</p>
              <span>LOCATION: {location}</span>
              <p>
                <span>QUALIFICATION:</span>
                {qualification}
              </p>
              <button>Details</button>
            </>
          )}
        </div>

        <div className={styles.moreContent}></div>
      </div>
    </div>
  );
};

export default CareerCard;
