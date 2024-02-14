import styles from "./Hero.module.scss";
import HeroImg from "../../assets/lady-smiling.jpg";
import { useGlobalContext } from "../Context/Context";

const Hero = () => {
  const { ref, inView } = useGlobalContext();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div
          className={`${styles.leftContainer} ${inView ? styles.appear : ""}`}
        >
          <img src={HeroImg} alt="" />
        </div>
        <div
          ref={ref}
          className={`${styles.rightContainer} ${inView ? styles.appear : ""}`}
        >
          <h1>Does your business need to grow?</h1>
          <p>
            You're in luck, we have just what you need: simple, affordable and
            quick-to-deploy technology, tools and apps for your SME and Large
            Enterprises!
          </p>
          <div>
            <a className={styles.ctaBtn} href="">
              Get started now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
