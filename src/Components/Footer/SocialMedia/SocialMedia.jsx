import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import styles from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <>
      <h2>Social Media</h2>
      <div className={styles.socialMediaIconContainer}>
        <a href="">
          <FaFacebook className={styles.socialMediaIcon} />
        </a>
        <a href="">
          <FaXTwitter className={styles.socialMediaIcon} />
        </a>
        <a href="">
          <FaLinkedin className={styles.socialMediaIcon} />
        </a>
        <a href="">
          <FaInstagram className={styles.socialMediaIcon} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
