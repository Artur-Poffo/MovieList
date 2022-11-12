import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  margin: 20px;

  p {
    color: var(--primary);
    margin-top: 10px;
    font-weight: bolder;
    text-align: center;
    max-width: 200px;
  }

  img {
    transition: all .3s ease;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`