import { IoCall } from "react-icons/io5";
import ContactCard from "../ContactCard/ContactCard";

const Call = () => {
  return (
    <>
      <ContactCard
        link="#"
        icon={<IoCall />}
        title="Give us a call"
        details="Call us, 8am - 5pm"
        contactInfo={["0903 791 2235", "0809 530 6440"]}
      />
    </>
  );
};

export default Call;
