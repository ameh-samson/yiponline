import { useGlobalContext } from "../../../../Components/Context/Context";
import styles from "./CareerCard.module.scss";
import { useInView } from "react-intersection-observer";

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

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.card}>
      <div
        ref={ref}
        className={`${styles.cardContainer} ${inView ? styles.appear : ""} `}
      >
        <div className={styles.content}>
          <h3 onClick={handleClick}>{title}</h3>
          {cardState.detailsVisible && (
            <>
              <p onClick={handleClick}>{intro}</p>
              <span>LOCATION: {location}</span>
              <p onClick={handleClick}>
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
