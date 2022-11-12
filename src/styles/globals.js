import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    overflow-x: hidden;
    font-family: sans-serif;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }

  *, input, button {
    border: none;
    outline: none;
  }

  a, a:active {
    color: inherit;
  }

  html, body, #root {
    height: 100%;
  }

:root {
  --background: #11172B;
  --backgroundLight: #1B2138;
  --secondary: #0EE7B7;
  --primary: #7AC7E3;
  --gradient: linear-gradient(225deg, #313860 0%, #11172B 100%);
  --text: #848DA0;
  --textLight: #C4C4C4;
  --border: #313958;
  --inputBackground: #1E253E;
}
`