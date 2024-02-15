import styles from "./Careers.module.scss";
import teamImg from "../../assets/team.jpeg";
import CareerCard from "./CareerList/CareerCard/CareerCard";
import TechnicalProductOwner from "./CareerList/TechnicalProductOwner/TechnicalProductOwner";
import BusineOperationsLead from "./CareerList/BusinessOperationsLead/BusineOperationsLead";
import { useInView } from "react-intersection-observer";

const Careers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={styles.career}>
      <div className={styles.careerContainer}>
        <div className={styles.careerTitleContainer}>
          <h1
            ref={ref}
            className={`${styles.productTitle} ${inView ? styles.appear : ""}`}
          >
            Careers
          </h1>
        </div>

        <div
          ref={ref}
          className={`${styles.careerContent}  ${inView ? styles.appear : ""}`}
        >
          <span>Be part of our team</span>
          <h2>Joins Us In Your Greatest Professional Mission</h2>
          <p>
            Building accessible tech to structure, automate & scale-up African
            businesses!
          </p>
        </div>

        <div
          ref={ref2}
          className={`${styles.careerImg} ${inView2 ? styles.appear : ""}`}
        >
          <img src={teamImg} alt="" />
        </div>

        <div
          ref={ref2}
          className={`${styles.employeeCulture} ${
            inView2 ? styles.appear : ""
          }`}
        >
          <h2>Our Employee Culture</h2>
          <p>
            Integrity, Kindness, Curiosity & Excellence We make room for the
            best talent! Check us out!
          </p>
        </div>

        <div className={styles.careerListContainer}>
          <div>
            <TechnicalProductOwner />
          </div>
          <div>
            <BusineOperationsLead />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
