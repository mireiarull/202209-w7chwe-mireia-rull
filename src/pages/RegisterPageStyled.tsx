import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  background: linear-gradient(-45deg, #693829, #722241, #45267e, #1c1825);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  height: 100vh;

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
