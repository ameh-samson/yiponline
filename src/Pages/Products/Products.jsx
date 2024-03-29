import styles from "./Products.module.scss";
import Powpa from "./ProductsList/Powpa/Powpa";
import Simpoo from "./ProductsList/Simpoo/Simpoo";
import CustomSoftwareDev from "./ProductsList/CustomSoftwareDev/CustomSoftwareDev";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className={styles.products}>
      <div className={styles.productsContainer}>
        <div className={styles.productsTitleContainer}>
          <h1
            ref={ref}
            className={`${styles.productTitle}  ${inView ? styles.appear : ""}`}
          >
            Features
          </h1>
        </div>

        <div
          ref={ref2}
          className={`${styles.productContent}  ${
            inView2 ? styles.appear : ""
          }`}
        >
          <span>Our Products & Services</span>
          <h2>World-class, bottom-line friendly solutions for your business</h2>
          <p>
            Our team of tech geniuses, design wizards, and business ninjas
            create innovative custom & off-the-rack software-as-a-service
            products to automate tasks, streamline operations, and make your
            business a breeze. Whether it's e-commerce, Insurance, Bookkeeping &
            manufacturing or health care we've got you covered!
          </p>
        </div>

        <div className={styles.productGrid}>
          <div>
            <Powpa />
          </div>
          <div>
            <Simpoo />
          </div>

          <div>
            <CustomSoftwareDev />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
