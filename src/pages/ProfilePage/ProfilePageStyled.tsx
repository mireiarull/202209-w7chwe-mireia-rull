import styled from "styled-components";

const ProfilePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  height: 350px;
  width: 95%;
  margin: 20px 0;
  border-radius: 20px;
  gap: 10px;
  position: relative;
  .user__name {
    font-size: 1.6rem;
    margin-top: 10px;
  }

  img {
    aspect-ratio: 1;
    height: 230px;
    object-fit: cover;
    margin-bottom: 10px;
    width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }

  .user__relationship {
    background-color: #6b3fbe;
    border-radius: 20px;
    padding: 4px 15px;
    color: white;
    font-weight: 400;
    position: absolute;
    top: 215px;
  }

  @media screen and (min-width: 750px) {
    .user__inner {
      display: flex;
      gap: 20px;
      img {
        width: 150px;
      }
    }
  }
  @media screen and (min-width: 1100px) {
    .user__inner {
      img {
        width: 200px;
        height: 200px;
      }
    }
  }

  .user__info {
    li {
      margin-top: 5px;
      font-size: 1rem;
      span {
        font-weight: bold;
      }
    }
  }
`;

export default ProfilePageStyled;
