import Button from "../../components/Button/Button";
import { WelcomePageStyled } from "./WelcomePageStyled";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <WelcomePageStyled>
      <h1>HI SPACE</h1>
      <div className="welcome-navigation">
        <Link to="/login">
          <Button text="Log in" classCss="welcome-button" />
        </Link>
        <Link to="/register">
          <Button text="Register" classCss="welcome-button" />
        </Link>
      </div>
    </WelcomePageStyled>
  );
};

export default WelcomePage;
