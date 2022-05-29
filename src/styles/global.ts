import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #fbf2f5;
        --green:#33CC95;
        --red: #e52e4d;
        --blue: #5429cc;
        --blue-light:#6933FF;
        --text-title: #363F5F;
        --text-body:#969CB3;
        --shape:#ffffff;
        --orange: #FF4001;
    }

    body{
    
        min-height: 100%;
    }

    h2::selection {
        color: white;
        background-color: var(--orange);
    }   

    span::selection {
        color: var(--orange);
        background-color: white; 
    }

    th::selection{
        color: white;
        background-color: var(--orange);
    }

    td::selection{
        color: white;
        background-color: var(--orange);
    }

    *{  
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media(max-width:1000px){
            font-size: 93.75%;
        }

        @media(max-width:720px){
            font-size: 87.5%;
        }
    }

    body,input,textarea,button,h2,h3,p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 500px;
        background-color: var(--background);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;
        transition: filter 0.4s;

        &:hover{
            filter: brightness(0.5);
        }
    }
    `;
const lightTheme = {
  body: "#e2e2e2",
  text: "#363537",
  toggleBorder: "#fff",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
