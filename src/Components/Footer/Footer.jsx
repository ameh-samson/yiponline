import styles from "./Footer.module.scss";
import Address from "./Address/Address";
import OurContacts from "./OurContacts/OurContacts";
import UsefulLinks from "./UsefulLinks/UsefulLinks";
import OurServices from "./OurServices/OurServices";
import About from "./About/About";
import SocialMedia from "./SocialMedia/SocialMedia";
import yipOnlineLogo from "../../assets/yip-online-logo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div>
          <Address />
        </div>
        <div>
          <OurContacts />
        </div>
        <div>
          <UsefulLinks />
        </div>
        <div>
          <OurServices />
        </div>
        <div>
          <About />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
      <hr className={styles.hr} />

      <div className={styles.footerSubsetContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.footerLogo} src={yipOnlineLogo} alt="" />
        </div>
        <p className={styles.copyright}>
          Yip-Online IT Services. © {currentYear}. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
