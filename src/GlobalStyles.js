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

textarea {
    font-family: 'Inter', sans-serif ; 
  }

textarea::placeholder {
    font-family: 'Inter', sans-serif ; 
  }

input {
    font-family: 'Inter', sans-serif ; 
  }

input::placeholder {
    font-family: 'Inter', sans-serif ; 
  };

.react-datepicker{
  font-family: "Inter", sans-serif;
border: 1px solid rgba(16, 24, 40, 0.2);
border-radius: 12px;
padding: 16px;
width: 325px;
height:  100%;
background: #fff;
  }
  
  .react-datepicker__month-container{
    width: 100%;
}

.react-datepicker__header {
        background: none;
        border: none;

}

.react-datepicker__current-month{
  font-weight: 600;
font-size: 16px;
line-height: 1.2;
text-align: center;
color: #101828;
margin-bottom: 20px;
}

.react-datepicker__day-names{
  display: flex;
}


.react-datepicker__day-name{
  font-weight: 600;
font-size: 12px;
line-height: 1.2;
text-align: center;
color: #475467;
width: 41px;
text-transform: uppercase;

}

.react-datepicker__week{
display: flex;
justify-content: space-between
}
 
/* .react-datepicker__month{
display: flex;
    flex-wrap: wrap;
    width: 100%;
}*/

.react-datepicker__day{
/* font-weight: 400;
font-size: 14px;
line-height: 1.2;
text-align: center;
color: #101828; */
}  
.react-datepicker__day--selected{
  background: #e44848;
}

.react-datepicker__day--keyboard-selected{
  background: #f7f7f7;
}

/* .react-datepicker__navigation {
  top: none;
} */



`;

export default GlobalStyles;
