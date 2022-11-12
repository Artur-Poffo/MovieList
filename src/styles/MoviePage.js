import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--gradient);
`
export const Bg = styled.div`
  padding: 60px;
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41)), url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--primary);

  h1 {
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.1rem;
    max-width: 540px;
    letter-spacing: 1.5px;
    font-weight: bolder;
    margin: 15px 0;
  }

  span {
    text-decoration: underline;
    font-weight: bolder;
    letter-spacing: 1.5px;
  }
`

export const GenreList = styled.ul`
  display: flex;
  align-items: center;
  font-weight: bolder;
  letter-spacing: 2px;
  gap: 30px;
  margin: 10px 0 20px 0;
`