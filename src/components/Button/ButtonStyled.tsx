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
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${(props) => props.theme.featuredColor};
  }
`;

export default ButtonStyled;
