import styled from "styled-components";

export const ButtonDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: 0;
  svg{
    color: ${p => p.theme["gray-300"]};
  }
  &:hover{
    cursor: pointer;
    svg{
        color: ${p => p.theme["red-500"]};
    }
  }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
`