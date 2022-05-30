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
    position: relative;
    min-height: 100vh;
    }

    h2::selection {
        color: white;
        background-color: ${(props) => props.theme.colors.backgroundSecondary};
    }   

    span::selection {
        color: ${(props) => props.theme.colors.backgroundSecondary};
        background-color: white; 
    }

    th::selection{
        color: white;
        background-color: ${(props) => props.theme.colors.backgroundSecondary};
    }

    td::selection{
        color: white;
        background-color: ${(props) => props.theme.colors.backgroundSecondary};
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
        background: ${(props) => props.theme.colors.backgroundBody};
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
        background-color: ${(props) => props.theme.colors.backgroundBody};
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
