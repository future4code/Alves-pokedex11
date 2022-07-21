import React, { useContext } from 'react'
import GlobalStateContext from '../../../Global/GlobalStateContext'
import { useNavigate } from 'react-router-dom'
import{goDetailPage,goToPokedexPage} from '../../../Routes/coordinator'
import {PokeCardContainer, PokeImg, PokeCard, ButtonContainer, Button, Titulo} from './styled'
import Header from '../../Header/Header'

function HomePage() {
  const navigate = useNavigate()
  const {pokemons,pokemonNames } = useContext(GlobalStateContext)


  const PokeListDetail = pokemons && pokemons.map((detail) =>{
    return(
      <div key = {detail.id}>
      <PokeCard>
        <PokeImg src = {detail.sprites.front_default}/>
        <p>{detail.name}</p>
      </PokeCard>
      <ButtonContainer>
      <Button>Adicionar a Pokedex</Button>
      <Button onClick={() =>goDetailPage(navigate, detail.name)}>Detalhes</Button>
      </ButtonContainer>
      </div>
    )

  })


  const pokeList = pokemonNames && pokemonNames.map((poke) =>{
    return(
      <div key ={poke.id}>
        <p>{poke.name}</p>
      </div>
    )

  })


  return (
    <div>
      <Header title ={"lista pokemons"} HeaderButton ={() => goToPokedexPage(navigate)}/>
      <Titulo>Todos Pokémons</Titulo>
      <PokeCardContainer>
      {PokeListDetail}
      </PokeCardContainer>
        
    </div>
  )
}

export default HomePage