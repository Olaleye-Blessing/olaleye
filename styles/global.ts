import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    :root {
        --bg-main: #0e141b;
        --bg-primary: #182635;
        --bg-blurred: #0e141b;

        --fg-main: #ffffff;
        --fg-primary: #f2f5f7;

        --color-red: #ff0a78;
        --color-red-100: #fa3879;

        --home-bg: hsla(200deg, 100%, 85%, 0.1);
        --home-bg-sec: hsla(200deg, 100%, 85%, 0);

        --color-black-100: #081c30;
        --color-black-200: #031221;
        --color-gray-600: #757f8a;
        --color-gray-700: #7e8c9a;
        --color-gray-800: #9ca8b4;
        --color-gray-900: #d9e0e8;

        --shadow: 0 0.1rem 0.1rem hsl(0deg 0% 0% / 0.075);
        --shadow-last: 0 16px 16px hsl(0deg 0% 0% / 0.075);

        --box-shadow-md: var(--shadow), var(--shadow), var(--shadow), var(--shadow), var(--shadow-last);

        --font-primary: 'Poppins', sans-serif;
        --font-secondary: 'Playfair Display', serif;

        --border-rad-sm: 0.7rem;
        --border-rad-md: 1rem;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    
    #__next {
        isolation: isolate;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
    }
    
    body {
        font-size: 1.6rem;
        line-height: 1.5;
        background-color: var(--bg-main);
        color: var(--fg-main);
        font-family: var(--font-primary);
        font-weight: 400;
    }
    
    html, body, #__next {
        /* scrollbar-width: thin; */
        scrollbar-width: none;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0.6rem rgba(0,0,0,0.3);
        border-radius: 1rem;
        background-color: var(--color-gray-600);
    }
    
    ::-webkit-scrollbar {
        width: 0.5rem;
        background-color: transparent;

    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        box-shadow: var(--box-shadow-md);
        background-color: var(--color-gray-900);

    }
    
    a {
        text-decoration: none;
        color: var(--color-red-100);
        transition: all 0.2s linear;
        /* font-family: var(--font-primary); */
        font-family: var(--font-secondary);

        &:hover {
            opacity: 0.7;
        }
    }

    button {
        display: inline-block;
        background-color: transparent;
        border: none;
    }

    .btn {
        &__primary {
            background-color: var(--color-red-100);
            border: 0.1rem solid transparent;
            border-radius: var(--border-rad-md);
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 900;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 3rem;
    }

    h3 {
        /* font-size: 2.4rem; */
        font-size: 2.1rem;
    }

    h5 {
        font-size: 1.8rem;
    }

    strong {
        font-weight: bold;
    }

    .technologies {
        display: flex;
        align-items: center;
        justify-content: start;
        flex-flow: row wrap;
        margin-top: 2rem;
    }

    .tech {
        background-color: var(--color-black-100);
        width: max-content;
        margin-right: 1rem;
        margin-bottom: 2rem;
        padding: 0.6rem 1rem 0.8rem;
        border-radius: var(--border-rad-sm);
        font-size: 1rem;
    }
`;

export default GlobalStyle;
