import styled from "styled-components";

const UserCardListStyled = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  @media screen and (min-width: 890px) {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    padding: 0 30px;
  }
`;

export default UserCardListStyled;
