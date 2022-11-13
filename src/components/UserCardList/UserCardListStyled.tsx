import styled from "styled-components";

const UserCardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 50px;
  @media screen and (min-width: 600px) {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fill, 200px);
    gap: 30px;
    padding: 0 30px;
  }
`;

export default UserCardListStyled;
