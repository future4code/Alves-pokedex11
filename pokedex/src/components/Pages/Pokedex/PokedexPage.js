import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goDetailPage, goHomePage } from '../../../Routes/coordinator'
import Header from '../../Header/Header'

function PokedexPage() {

const navigate = useNavigate()


  return (
    <div>
      <Header title = {"pokedex"} HeaderButton ={() => goHomePage(navigate)}/>
      <h1>Meus Pokémons</h1>
      <button onClick={() => goDetailPage(navigate)}>Detalhes</button>
    </div>
  )
}

export default PokedexPage