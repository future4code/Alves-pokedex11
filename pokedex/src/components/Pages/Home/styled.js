import styled from "styled-components";

export const BackGroundContainer = styled.div`
    background-color:#DDDDDD;

`


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
    background-color:darkgray;
    width:50%;
`

export const PokeImg = styled.img`
  position:relative;
  left:58px;
  bottom:66px;
  height:170px;
  
  
`;

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    left:20px;
    bottom:95px;
    height:23px;
    
    

`

export const ButtonCatch = styled.button`
       background: #FFFFFF;
       border-radius: 30px;
       margin:9px;
       position:absolute;
       left:115px;
       bottom:23px;
       width: 146px;
       height: 38px;
       font-family: 'Poppins';
       font-style: normal;
    
`

export const ButtonDetails = styled.button`
text-decoration-line: underline;
border:none;
background:none;
color: #FFFFFF;
position:absolute;
left:28px;
top:23px;



font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;

`

export const Titulo = styled.h2`
height: 72px;


font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

color: #FFFFFF;
`
export const PokeNameTitle = styled.h2`
        position: relative;
        width: 159px;
        height: 39px;
        right: 35px;
        bottom: 40px;


        
        color:#FFFFFF

`
 