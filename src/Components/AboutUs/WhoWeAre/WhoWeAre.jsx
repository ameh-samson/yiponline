import styles from "./WhoWeAre.module.scss";
import { useInView } from "react-intersection-observer";

const WhoWeAre = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className={styles.whoWeAreContainer}>
      <span
        ref={ref}
        className={`${styles.intro}  ${inView ? styles.appear : ""}`}
      >
        Who we are
      </span>
      <h2
        ref={ref}
        className={`${styles.title}  ${inView ? styles.appear : ""}`}
      >
        We Yeepsters make running a business a breeze by developing smart
        technology that simplifies tasks, streamlines operations, and boosts
        efficiency and profits.
      </h2>
      <p
        ref={ref2}
        className={`${styles.content}  ${inView2 ? styles.appear : ""}`}
      >
        Yeep that's what we do! We'll take care of the technical side of things,
        so you can focus on the fun part of running your business. Let's work
        together to make your business soar!
      </p>

      <div>
        <a
          ref={ref2}
          href=""
          className={`${styles.aboutUsCta}  ${inView2 ? styles.appear : ""}`}
        >
          Find Out More{" "}
        </a>
      </div>
    </div>
  );
};

export default WhoWeAre;
