import styles from "./WhoWeAre.module.scss";

const WhoWeAre = () => {
  return (
    <>
      <span className={styles.intro}>Who we are</span>
      <h2 className={styles.title}>
        We Yeepsters make running a business a breeze by developing smart
        technology that simplifies tasks, streamlines operations, and boosts
        efficiency and profits.
      </h2>
      <p className={styles.content}>
        Yeep that's what we do! We'll take care of the technical side of things,
        so you can focus on the fun part of running your business. Let's work
        together to make your business soar!
      </p>
      <a href="" className={styles.aboutUsCta}>
        Find Out More{" "}
      </a>
    </>
  );
};

export default WhoWeAre;
