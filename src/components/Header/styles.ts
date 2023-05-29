import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    background: linear-gradient(to bottom, ${props => props.theme.black}, ${props => props.theme["gary-700"]});
    padding: 2.5rem 0 7.5rem;

    display: grid;
    grid-template-columns: 1fr 70rem 7rem 1fr;
    grid-column-start: 1;
    grid-column-end: 5;

    border-bottom: 1px solid ${props => props.theme["yellow-500"]}30;

`
export const HeaderContent = styled.header`
    width: 100%;
    max-width: 70rem;
    grid-column: 2 / 3;

    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    /* @media only screen and (min-width: 1440px){
        position: relative;
    }
    @media only screen and (max-width: 1440px){
        max-width: 1024px;
    } */
`
export const UserAvatar = styled.img`
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: 2px solid transparent;
    box-shadow: 0px 0px 10px 10px #00000010;

    grid-column: 3 / 4 ;
    display: flex;
    justify-self: flex-end;

    transition: all .3s;
    &:hover{
        cursor: pointer;
        border: 2px solid ${props => props.theme["yellow-500"]};
        box-shadow: 0px 0px 10px 20px #00000015;
    }

    @media only screen and (min-width: 1440px){
        position: absolute;
        height: auto;
    }
`
