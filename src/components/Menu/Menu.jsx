import { Link } from "react-router-dom";
import { ImHome, ImEmbed, ImStack, ImAddressBook } from "react-icons/im";
import "./menu.css";

const Menu = () => {
  return (
    <ul className="navbar">
      <li>
        <Link title="Home" className="link" to="/">
          <ImHome />
        </Link>
      </li>
      <li>
        <Link title="Quiz" className="link" to="/quiz">
          <ImEmbed />
        </Link>
      </li>
      <li>
        <Link title="Portfólio" className="link" to="/portfolio">
          <ImStack />
        </Link>
      </li>
      <li>
        <Link title="Contato" className="link" to="/contato">
          <ImAddressBook />
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
