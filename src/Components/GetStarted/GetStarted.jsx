import { Link } from "react-router-dom";
import styles from "./GetStarted.module.scss";
import { useInView } from "react-intersection-observer";

const GetStarted = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={styles.getStarted}>
      <div className={styles.getStartedContainer}>
        <div className={styles.content}>
          <span
            ref={ref}
            className={`${styles.intro} ${inView ? styles.appear : ""}`}
          >
            We Can Help{" "}
          </span>
          <h2
            ref={ref2}
            className={`${styles.title} ${inView2 ? styles.appear : ""}`}
          >
            Let's show you how we can use tech to grow your business !
          </h2>
        </div>

        <div>
          <Link
            ref={ref2}
            className={`${styles.ctaGetStarted} ${
              inView2 ? styles.appear : ""
            }`}
            to="signup"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
