import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background);
`

export const Inputs = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 20px;

  input, button {
    padding: 10px;
    width: 100%;
    height: 2rem;
    border-radius: 5px;
    border: 2px solid var(--border);
    background-color: var(--inputBackground);
    color: var(--text);
  }

  button {
    padding: 0;
    cursor: pointer;
    transition: all .4s ease;

    &:hover {
      color: var(--secondary);
    }
  }
`

export const FlexWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`