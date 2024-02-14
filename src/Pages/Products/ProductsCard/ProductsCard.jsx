import styles from "./ProductsCard.module.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const ProductsCard = ({ title, content, url }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`${styles.card} ${inView ? styles.appear : ""}`}>
      <h2>{title}</h2>
      <p>{content}</p>

      <div>
        <a href={url}>Visit +</a>
      </div>
    </div>
  );
};

export default ProductsCard;
