import { Link } from "react-router-dom";
import { ImHome, ImEmbed, ImStack, ImAddressBook } from "react-icons/im";
import "./menu.css";

const Menu = () => {
  return (
    <ul className="navbar">
      <li>
        <Link className="link" to="/">
          <ImHome />
        </Link>
      </li>
      <li>
        <Link className="link" to="/quiz">
          <ImEmbed />
        </Link>
      </li>
      <li>
        <Link className="link" to="/portfolio">
          <ImStack />
        </Link>
      </li>
      <li>
        <Link className="link" to="/contato">
          <ImAddressBook />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
