import styles from "./Services.module.scss";
import Card from "../Card/Card";

import EcommerceImg from "../../assets/shop.jpg";
import HospitalityImg from "../../assets/hospitality.jpg";
import SEOImg from "../../assets/SEO.jpg";
import macImg from "../../assets/macbook-computer.jpg";
import DomainImg from "../../assets/domain.jpg";

const Services = () => {
  return (
    <section className={styles.solutionProvided}>
      <div className={styles.solutionProvidedContainer}>
        <span className={styles.intro}>Solution provided</span>
        <h2 className={styles.title}>
          We focus on bringing value and solve business main challenges
        </h2>
        <div className={styles.cardContainer}>
          <div>
            <Card imageUrl={EcommerceImg} title="Mission" />
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
          <a href="" className={styles.solutionoProvidedCta}>
            Find Out More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
