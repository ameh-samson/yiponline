import { useInView } from "react-intersection-observer";
import styles from "./Services.module.scss";

import Card from "../Card/Card";
import EcommerceImg from "../../assets/shop.jpg";
import HospitalityImg from "../../assets/hospitality.jpg";
import SEOImg from "../../assets/SEO.jpg";
import macImg from "../../assets/macbook-computer.jpg";
import DomainImg from "../../assets/domain.jpg";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className={styles.solutionProvided}>
      <div className={styles.solutionProvidedContainer}>
        <span
          ref={ref}
          className={`${styles.intro} ${inView ? styles.appear : ""}`}
        >
          Solution provided
        </span>
        <h2
          ref={ref}
          className={`${styles.title} ${inView ? styles.appear : ""}`}
        >
          We focus on bringing value and solve business main challenges
        </h2>
        <div className={styles.cardContainer}>
          <div>
            <Card imageUrl={EcommerceImg} title="E-commerce" />
          </div>
          <div>
            <Card imageUrl={HospitalityImg} title="Hospitality" />
          </div>
          <div>
            <Card imageUrl={SEOImg} title="Search functionality" />
          </div>
          <div>
            <Card imageUrl={macImg} title="Responsive themes" />
          </div>
          <div>
            <Card imageUrl={DomainImg} title="Custom domain" />
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <a
            ref={ref2}
            href=""
            className={`${styles.solutionoProvidedCta}  ${
              inView2 ? styles.appear : ""
            }`}
          >
            Find Out More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
