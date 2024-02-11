import styles from "./GetStarted.module.scss";

const GetStarted = () => {
  return (
    <section className={styles.getStarted}>
      <div className={styles.getStartedContainer}>
        <div className={styles.content}>
          <span className={styles.intro}>We Can Help </span>
          <h2 className={styles.title}>
            Let's show you how we can use tech to grow your business !
          </h2>
        </div>

        <div>
          <a className={styles.ctaGetStarted} href="">
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
