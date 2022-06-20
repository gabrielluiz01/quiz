import styled from "styled-components/macro";

const Container = styled.section`
  max-width: 1000px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3c1a3c;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return <Container>{children}</Container>;
}
