import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import{goDetailPage,goToPokedexPage} from '../../../Routes/coordinator'
import {PokeCardContainer, PokeImg, PokeCard, ButtonContainer, Button, Titulo} from './styled'
import Header from '../../Header/Header'
import axios from 'axios'

function HomePage() {
  const navigate = useNavigate()
  const [pokemonNames,setPokemonNames] = useState([])
  const [pokemons, setPokemons] = useState([]);



  useEffect(() =>{
    getPokemonNames()

  },[])

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        .then((response) => {
          newList.push(response.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((error) => console.log(error.message));
    });
  }, [pokemonNames]);

  console.log(pokemons)

  const getPokemonNames = () => {
    axios.get(' https://pokeapi.co/api/v2/pokemon/')

    .then((resp ) =>{
      setPokemonNames(resp.data.results)

    })
    .catch((err) =>{
      console.log(err)

    })


  }

  const PokeListDetail = pokemons && pokemons.map((detail) =>{
    return(
      <div>
      <PokeCard>
        <PokeImg src = {detail.sprites.front_default}/>
        
        
      </PokeCard>
      <ButtonContainer>
      <Button>Adicionar a Pokedex</Button>
      <Button onClick={() =>goDetailPage(navigate)}>Detalhes</Button>
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