import styled from "styled-components";

function Header() {
  return (
    <header>
      <Title>To Do List</Title>
    </header>
  );
}

export default Header;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  width: fit-content;
  background: linear-gradient(90deg, #fd1d1d, #a23fe3);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
