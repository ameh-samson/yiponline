import styles from "./Hero.module.scss";
import HeroImg from "../../assets/lady-smiling.jpg";
import { useGlobalContext } from "../Context/Context";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div
          ref={ref}
          className={`${styles.leftContainer} ${inView ? styles.appear : ""}`}
        >
          <img src={HeroImg} alt="" />
        </div>
        <div
          ref={ref2}
          className={`${styles.rightContainer} ${inView2 ? styles.appear : ""}`}
        >
          <h1>Does your business need to grow?</h1>
          <p>
            You're in luck, we have just what you need: simple, affordable and
            quick-to-deploy technology, tools and apps for your SME and Large
            Enterprises!
          </p>
          <div>
            <Link
              ref={ref2}
              className={`${styles.ctaBtn} ${inView2 ? styles.appear : ""}`}
              to="signup"
            >
              Get started now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
