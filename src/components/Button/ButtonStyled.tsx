import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.featuredColor};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.2rem 2rem;
  border: none;
  border-radius: 30px;
  margin: 20px;
  font-size: 1.25rem;
  font-weight: 600;
  font-family: inherit;
  &:focus {
    cursor: pointer;
    background-color: ${(props) => props.theme.featuredColor};
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.267);
    color: #fff;
    transition: all 0.3s ease 0s;
    transform: translateY(-7px);

    @media (prefers-reduced-motion) {
      transform: none;
    }
  }
`;

export default ButtonStyled;
