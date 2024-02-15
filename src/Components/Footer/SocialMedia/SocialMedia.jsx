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
        <div>
          {" "}
          <a href="">
            <FaFacebook className={styles.socialMediaIcon} />
          </a>
        </div>
        <div>
          {" "}
          <a href="https://twitter.com/yiponline_">
            <FaXTwitter className={styles.socialMediaIcon} />
          </a>
        </div>
        <div>
          {" "}
          <a href="https://www.linkedin.com/company/yiponline">
            <FaLinkedin className={styles.socialMediaIcon} />
          </a>
        </div>
        <div>
          {" "}
          <a href="">
            <FaInstagram className={styles.socialMediaIcon} />
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
