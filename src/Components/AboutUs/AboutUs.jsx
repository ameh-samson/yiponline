import Mission from "../Mission/Mission";
import Vision from "../Vision/Vision";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.AboutUsContainer}>
        <div className={styles.missionVision}>
          <Mission />
          <Vision />
        </div>

        <div className={styles.whoWeAre}>
          <span>Who we are</span>
          <h2>
            We Yeepsters make running a business a breeze by developing smart
            technology that simplifies tasks, streamlines operations, and boosts
            efficiency and profits.
          </h2>
          <p>
            Yeep that's what we do! We'll take care of the technical side of
            things, so you can focus on the fun part of running your business.
            Let's work together to make your business soar!
          </p>
          <a href="">Find Out More </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
