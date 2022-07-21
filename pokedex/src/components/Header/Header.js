import React from 'react'
import {HeaderContainer, ButtonHeader, Logo, Titulo} from './styled'
import Pokelogo from '../../img/Pokelogo.png'

function Header({title, HeaderButton}) {


const ButtonTitle = () =>{
    switch (title){
      case 'lista pokemons':
        return 'Pokedex'
      case 'pokedex':
        return 'Lista de Pokemons'  
      default:
      return 'Voltar'
    }


}



  return (
    <HeaderContainer>
      <Logo src ={Pokelogo}/>
        <ButtonHeader onClick={HeaderButton}>{ButtonTitle()}</ButtonHeader>
        <Titulo>{title}</Titulo>

    </HeaderContainer>


  )
}

export default Header