import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --mainColor: ${(props) => props.theme.colors.mainColor};
  --secondaryColor: ${(props) => props.theme.colors.secondaryColor};

  --borderColor: ${(props) => props.theme.colors.borderColor};

  --mainText: ${(props) => props.theme.colors.mainText};
  --secondaryText: ${(props) => props.theme.colors.secondaryText};

  --themeDotBorder: ${(props) => props.theme.colors.themeDotBorder};

  --previewBg: ${(props) => props.theme.colors.previewBg};
  --previewShadow: ${(props) => props.theme.colors.previewShadow};

  --buttonColor: ${(props) => props.theme.colors.buttonColor};
}

html,
body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
}

body * {
  transition: 0.3s;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  color: var(--mainText);
  font-family: "Russo One", sans-serif;
  font-weight: 500;
}

p,
li,
span,
label,
input,
textarea {
  color: var(--secondaryText);
  font-family: "Roboto Mono", monospace;
}

a {
  text-decoration: none;
  color: #17a2b8;
}

ul {
  list-style: none;
}

h1 {
  font-size: 56px;
}
h2 {
  font-size: 36px;
}
h3 {
  font-size: 28px;
}
h4 {
  font-size: 24px;
}
h5 {
  font-size: 20px;
}
h6 {
  font-size: 16px;
}
li {
  padding: 0;
  margin: 0;
}

`

export default GlobalStyles
