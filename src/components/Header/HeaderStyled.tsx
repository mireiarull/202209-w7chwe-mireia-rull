import styled from "styled-components";

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.colorPrimary};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2.5px solid ${(props) => props.theme.featuredColor};
  margin-bottom: 10px;

  h1 {
    font-family: ${(props) => props.theme.secondaryFont};
    letter-spacing: 3px;
    font-size: 3rem;
  }

  .header__nav {
    font-family: ${(props) => props.theme.secondaryFont};
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: right;
    text-align: right;
    gap: 20px;
    margin-top: 10px;
    &-item {
      padding-bottom: 10px;
    }

    .active {
      padding-bottom: 5px;
      border-bottom: 2px solid #4c3775;
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
  }
`;

export default HeaderStyled;
