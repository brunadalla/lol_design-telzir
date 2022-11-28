import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --dark-grey: #1E2327;
    --dark-blue: #022B3A;
    --green-blue: #1F7A8C;
    --grey: #E9ECEF;
    --light-blue: #E1E5F2;
    --white: #FFFFFF;
   
};

    * {
        margin: 0;
        border: 0;
        padding: 0px;
        outline: unset;

        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;

        list-style: none;

        box-sizing: border-box;
    };

`
export default GlobalStyle