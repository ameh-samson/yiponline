import { FaBars } from "react-icons/fa6";
import NavBar from "../Navbar/NavBar";
import yipOnlineLogo from "../../assets/yip-online-logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <img src={yipOnlineLogo} alt="" width="50px" />
      </div>
      <button>
        <FaBars />
      </button>
      <NavBar />
    </header>
  );
};

export default Header;
