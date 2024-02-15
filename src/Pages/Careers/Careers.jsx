import styles from "./Careers.module.scss";
import teamImg from "../../assets/team.jpeg";
import BusineOperationsLead from "./CareerList/BusinessOperationsLead/BusineOperationsLead";
import TechnicalProductOwner from "./CareerList/TechnicalProductOwner/TechnicalProductOwner";

const Careers = () => {
  return (
    <section className={styles.career}>
      <div className={styles.careerContainer}>
        <div className={styles.careerTitleContainer}>
          <h1 className={`${styles.productTitle} `}>Careers</h1>
        </div>

        <div className={styles.careerContent}>
          <span>Our Products & Services</span>
          <h2>Be part of our team</h2>
          <p>
            Building accessible tech to structure, automate & scale-up African
            businesses!
          </p>
        </div>

        <div className={styles.careerListContainer}>
          <TechnicalProductOwner />
          <BusineOperationsLead />
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
      </div>
    </section>
  );
};

export default Careers;
