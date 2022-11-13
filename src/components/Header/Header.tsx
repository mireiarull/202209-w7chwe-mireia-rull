import HeaderStyled from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="container">
      <Link to="/home">
        <h1 className="logo">HI SPACE</h1>
      </Link>
      <nav className="header__nav">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to="/my-profile">MY PROFILE</NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
