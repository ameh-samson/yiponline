import { Link } from "react-router-dom";

const UsefulLinks = () => {
  return (
    <>
      <h2>Useful Links</h2>
      <div>
        <Link to="products">Products</Link>
      </div>
      <div>
        <Link to="career">Careers</Link>
      </div>
    </>
  );
};

export default UsefulLinks;
