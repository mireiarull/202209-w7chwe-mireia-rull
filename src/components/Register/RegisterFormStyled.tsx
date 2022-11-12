import styled from "styled-components";

export const RegisterFormStyled = styled.form`
  display: flex;
  color: ${(props) => props.theme.colorPrimary};
  justify-content: center;
  flex-direction: column;
  font-size: 1.25rem;
  align-items: center;
  min-width: 300px;
  padding: 15px;
  margin: 20px auto;
  font-weight: 600;
  font-family: ${(props) => props.theme.primaryFont};

  input {
    border: none;
    border-bottom: 1px solid black;
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
    background-color: #6b3fbe;
    padding: 10px;
  }
`;
