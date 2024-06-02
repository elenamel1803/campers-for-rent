import { createGlobalStyle } from 'styled-components';
import InterRegular from './assets/fonts/Inter-Regular.ttf';
import InterMedium from './assets/fonts/Inter-Medium.ttf';
import InterSemiBold from './assets/fonts/Inter-SemiBold.ttf';

const GlobalStyles = createGlobalStyle`
:root {
	--button: #e44848;
	--main: #101828;
	--inputs: #f7f7f7;
	--block-features: #f2f4f7;
	--rating: #ffc531;
	--text: #475467;
}

#root {
  padding: 0;
}

@font-face {
       font-family: 'Inter';
       src: url(${InterRegular}) format('truetype');
       font-weight: normal;
       font-style: normal;
     }

     @font-face {
       font-family: 'Inter';
       src: url(${InterMedium}) format('truetype');
       font-weight: 500;
       font-style: normal;
     }

     @font-face {
       font-family: 'Inter';
       src: url(${InterSemiBold}) format('truetype');
       font-weight: 600;
       font-style: normal;
     }

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: 'Inter', sans-serif;
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
}

input {
    font-family: 'Inter', sans-serif ; 
  }

input::placeholder {
    font-family: 'Inter', sans-serif ; 
  }`;

export default GlobalStyles;
