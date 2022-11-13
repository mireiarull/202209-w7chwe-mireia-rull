import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  font-size: 2rem;
  border-radius: 15px;
  width: 50vw;
  height: 50vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  margin-top: auto;
  bottom: 0;
  margin-bottom: auto;
  background: radial-gradient(
    circle,
    rgba(1, 11, 11, 1) 0%,
    rgba(0, 0, 0, 0.9192051820728291) 100%
  );
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
