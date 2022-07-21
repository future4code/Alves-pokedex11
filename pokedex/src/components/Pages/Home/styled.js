import styled from "styled-components";


export const PokeCardContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
   

`
export const PokeCard = styled.div`
    margin:39px;
    padding: 45px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color:lightgray;
    width:50%;
`

export const PokeImg = styled.img`
  height:75%;
`;

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    left:50px;
    bottom:65px;
    height:23px;

`

export const Button = styled.button`
        border-radius:5px;
        background-color:lightgray;
    
`

export const Titulo = styled.h1`
        text-align:center;
`

 