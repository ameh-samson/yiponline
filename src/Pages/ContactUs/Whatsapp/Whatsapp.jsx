import ContactCard from "../ContactCard/ContactCard";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      <ContactCard
        link="https://api.whatsapp.com/send?phone=2349037912235"
        icon={<FaWhatsapp />}
        title="WhatsApp"
        details="Message us on WhatsApp, 8am - 5pm"
        contactInfo="0903 791 2235"
      />
    </>
  );
};

export default Whatsapp;
