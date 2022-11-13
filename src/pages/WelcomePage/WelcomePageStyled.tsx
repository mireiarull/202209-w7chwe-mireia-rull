import styled from "styled-components";

export const WelcomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
  align-items: center;

  color: ${(props) => props.theme.backgroundColor};
  background: linear-gradient(-45deg, #693829, #722241, #45267e, #1c1825);
  height: 100vh;

  .welcome-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    gap: 30px;

    @media screen and (min-width: 890px) {
      width: 40%;
    }

    a {
      display: flex;
      align-items: center;
      width: 100%;

      button {
        margin: 0;
      }
    }
  }

  .welcome-button {
    width: 100%;
    background-color: #9689b1;
    padding: 10px;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
