import styles from "./Services.module.scss";
import Card from "../Card/Card";

const Services = () => {
  return (
    <section className={styles.solutionProvided}>
      <div className={styles.solutionProvidedContainer}>
        <span className={styles.intro}>Solution provided</span>
        <h2 className={styles.title}>
          We focus on bringing value and solve business main challenges
        </h2>
        <div className={styles.cardContainer}>
          <Card />
        </div>

        <a href="" className={styles.aboutUsCta}>
          Find Out More
        </a>
      </div>
    </section>
  );
};

export default Services;
