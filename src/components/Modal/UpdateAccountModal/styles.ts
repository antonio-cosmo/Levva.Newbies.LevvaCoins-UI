import { css, styled } from "styled-components";

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    button{
        width: 100%;
    }

`

interface UserAvatarProps {
    variante?: "large" | "normal"
}
// export const UserAvatar = styled.img`
//     width: 8rem;
//     height: 8rem;
//     border-radius: 50%;
//     border: 2px solid transparent;
//     box-shadow: 0px 0px 10px 10px #00000010;
// `
export const UserAvatar = styled.img<UserAvatarProps>`
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

    ${props => props.variante == "large" &&
        css`
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            border: 2px solid transparent;
            box-shadow: 0px 0px 10px 10px #00000010;
        `
    }

    /* @media only screen and (min-width: 1440px){
        position: absolute;
        height: auto;
    } */
`