import styled from "styled-components";
import backgroudImg from "../../assets/bg.png";

export const AuthBackgroud = styled.div`
    background-image: url(${backgroudImg});
    background-size: cover;
    background-position: right;

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    min-width: 30rem;
    
    header{
        text-align: center;
        margin-bottom: 4rem;
    }

`

export const Header = styled.div`
    margin-bottom: 1rem;
    h2{
            margin-bottom: 1rem;
    }
    p{
        font-size: 0.75rem;
    }
`