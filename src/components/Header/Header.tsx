import HeaderStyled from "./HeaderStyled";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const Header = (): JSX.Element => {
  const myUserId = useAppSelector(({ user }) => user.id);

  return (
    <HeaderStyled className="container">
      <Link to="/home">
        <h1 className="logo">HI SPACE</h1>
      </Link>
      <nav className="header__nav">
        <NavLink to="/home">HOME</NavLink>
        <NavLink to={`/profile/${myUserId}`}>MY PROFILE</NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
