import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #fff;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 600;
  color: #fff;
`;

export const ButtonOption = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border: none;
  margin: 15px 0;
  background: ${({ selectedTheme }) => (selectedTheme ? "#08b725" : "#858181")};
  cursor: pointer;
  transition: 0.5s all;

  :hover {
    background: #08b725;
  }

  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  p {
    color: #fff;
    font-weight: 600;
    font-style: italic;
    font-size: 16px;
  }
`;
