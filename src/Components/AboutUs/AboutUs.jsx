import Mission from "./Mission/Mission";
import Vision from "./Vision/Vision";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.AboutUsContainer}>
        <div className={styles.missionVision}>
          <Mission />
          <Vision />
        </div>
        <div>
          <WhoWeAre />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
