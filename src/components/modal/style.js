import styled from "styled-components/macro";

export const Overlay = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #00000045;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const ModalBox = styled.div`
  width: 350px;
  height: 300px;
  background: #130224;
  border: 2px solid #fff;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-style: italic;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  background: #ffffe0;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s all;

  :hover {
    filter: brightness(85%);
  }
`;
