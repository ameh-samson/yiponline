import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About</h2>
      <div>
        <a href="#">About Us</a>
      </div>

      <div>
        <Link to="contact">Send a Message</Link>
      </div>
    </>
  );
};

export default About;
