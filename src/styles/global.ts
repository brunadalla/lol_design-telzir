import { createGlobalStyle, css } from 'styled-components';

const AnekDevanagari = css`
  @import url('https://fonts.googleapis.com/css2?family=Anek+Devanagari:wght@400;500;600;700;800&display=swap');
`;

const GlobalStyle = createGlobalStyle`
    ${AnekDevanagari}
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

        font-family: 'Anek Devanagari', sans-serif;
        font-weight: 500;
        font-size: 1rem;

        list-style: none;

        box-sizing: border-box;
    };

`
export default GlobalStyle