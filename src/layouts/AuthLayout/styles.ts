import styled from "styled-components";
import backgroudImg from "../../assets/bg.png";

export const AuthBackgroud = styled.div`
    background-image: url(${backgroudImg});
    background-size: cover;
    background-position: right;
`

export const AuthWrapper = styled.div`
    max-width: 30rem;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    header{
        text-align: center;
        margin-bottom: 2rem;
        width: 100%;
    }

`
export const AuthContent = styled.main`
    padding: 2rem;
    width: 100%;

    div{
        margin-bottom: 1rem;
        h2{
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        p{
            font-size: 0.75rem;
        }
    }
    
`