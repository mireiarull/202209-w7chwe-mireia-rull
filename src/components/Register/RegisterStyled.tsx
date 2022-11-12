import styled from "styled-components";

export const RegisterStyled = styled.form`
  display: flex;
  color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  align-items: center;
  min-width: 300px;
  padding: 15px;
  margin: 20px auto;
  font-weight: 600;

  input {
    border: none;
    border-bottom: 1px solid white;
    color: inherit;
    font-weight: 400;
    padding: 0 10px;
    width: 100%;
    background-color: transparent;
    text-align: left;
    font-size: 1.25rem;
    padding: 5px;

    &:focus {
      outline: none;
      border-bottom: 2px solid #6b3fbe;
    }
  }

  .form__item {
    width: 100%;
    margin: 20px 0;
  }

  button {
    width: 100%;
    background-color: #877e99;
  }

  @media screen and (min-width: 890px) {
    position: absolute;
    right: 0;
    top: 0;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    width: 76%;
    label {
      font-size: 1.3rem;
    }
    input {
      width: 350px;
    }
  }
`;
