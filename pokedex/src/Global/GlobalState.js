import React, { useEffect, useState } from 'react';
import GlobalStateContext from "./GlobalStateContext";

import axios from 'axios'


function GlobalState(props) {

const [pokemonNames, setPokemonNames] = useState([])
const [pokemons, setPokemons] = useState([]);


useEffect(() =>{
    getPokemonNames()

  },[])

  useEffect(() => {
    const newList = [];
    pokemonNames.forEach((item) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        .then((resp) => {
          newList.push(resp.data);
          if (newList.length === 20) {
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((err) =>{ 
        console.log(err.message)
      });
    });
  }, [pokemonNames]);


  const getPokemonNames = () => {
    axios.get(' https://pokeapi.co/api/v2/pokemon/')

    .then((resp ) =>{
      setPokemonNames(resp.data.results)

    })
    .catch((err) =>{
      console.log(err)

    })

  }

  const values = {
    pokemons,
    setPokemons
  }

  const Provider = GlobalStateContext.Provider

    return (
        <Provider value ={values}>
            {props.children}
        </Provider>
    )
}

export default GlobalState
