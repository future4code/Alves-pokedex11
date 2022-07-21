import React from 'react'
import { useNavigate } from 'react-router-dom'
import{goDetailPage,goToPokedexPage} from '../../../Routes/coordinator'
import Header from '../../Header/Header'

function HomePage() {
  const navigate = useNavigate()



  return (
    <div>
      <Header title ={"lista pokemons"} HeaderButton ={() => goToPokedexPage(navigate)}/>
      <h1>Todos Pokémons</h1>
        <button onClick={() =>goDetailPage(navigate)}>Detalhes</button>
    </div>
  )
}

export default HomePage