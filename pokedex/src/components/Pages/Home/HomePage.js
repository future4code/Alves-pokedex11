import React, { useContext } from 'react'
import GlobalStateContext from '../../../Global/GlobalStateContext'
import { useNavigate } from 'react-router-dom'
import{goDetailPage,goToPokedexPage} from '../../../Routes/coordinator'
import {BackGroundContainer,PokeCardContainer, PokeImg, PokeCard, ButtonContainer, ButtonCatch,ButtonDetails, Titulo, PokeNameTitle} from './styled'
import Header from '../../Header/Header'

function HomePage() {
  const navigate = useNavigate()
  const {pokemons} = useContext(GlobalStateContext)


  const PokeListDetail = pokemons && pokemons.map((detail) =>{
    return(
      <div key = {detail.id}>
      <PokeCard>
        <PokeNameTitle>{detail.name.toLocaleUpperCase()}</PokeNameTitle>
        <PokeImg src = {detail.sprites.front_default}/>
        
      </PokeCard>
      <ButtonContainer>
      <ButtonDetails onClick={() =>goDetailPage(navigate, detail.name)}>Detalhes</ButtonDetails>
      <ButtonCatch>Capturar</ButtonCatch>
      </ButtonContainer>
      </div>
    )

  })



  return (
    <div>
      <Header title ={"lista pokemons"} HeaderButton ={() => goToPokedexPage(navigate)}/>
    <BackGroundContainer>
  
      <Titulo>Todos Pokémons</Titulo>
      <PokeCardContainer>
      {PokeListDetail}
      </PokeCardContainer>
        
    </BackGroundContainer>
    </div>
  )
}

export default HomePage