import styles from "./Careers.module.scss";
import teamImg from "../../assets/team.jpeg";
import CareerCard from "./CareerList/CareerCard/CareerCard";
import TechnicalProductOwner from "./CareerList/TechnicalProductOwner/TechnicalProductOwner";
import BusineOperationsLead from "./CareerList/BusinessOperationsLead/BusineOperationsLead";

const Careers = () => {
  return (
    <section className={styles.career}>
      <div className={styles.careerContainer}>
        <div className={styles.careerTitleContainer}>
          <h1 className={`${styles.productTitle} `}>Careers</h1>
        </div>

        <div className={styles.careerContent}>
          <span>Be part of our team</span>
          <h2>Joins Us In Your Greatest Professional Mission</h2>
          <p>
            Building accessible tech to structure, automate & scale-up African
            businesses!
          </p>
        </div>
        <div>
          <img src={teamImg} alt="" />
        </div>

        <div className={styles.employeeCulture}>
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
