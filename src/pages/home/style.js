import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const BoxQuestion = styled.div`
  width: 400px;
  height: 150px;
  margin-bottom: 30px;
  background-color: #130224;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 25px;

  h3 {
    font-size: 25px;
    color: #fff;
    font-style: italic;
  }
`;

export const BoxOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtonOptions = styled.button`
  width: 400px;
  height: 45px;
  border-radius: 12px;
  background-color: ${({ selectedOption, isCorrect }) =>
    !selectedOption ? "#ffffe0" : selectedOption && isCorrect && "#08b725"};
  padding: 25px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  font-style: italic;
  cursor: pointer;
  transition: 0.5s all;

  :hover {
    filter: brightness(85%);
  }
`;
