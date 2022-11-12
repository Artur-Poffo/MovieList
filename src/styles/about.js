import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--background);
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
    font-weight: bolder;
    letter-spacing: 2px;
    color: var(--primary);
    max-width: 450px;
  }
`

export const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 3px;
  color: var(--primary);
  margin: 50px 0;
`