import React from 'react'
import { useNavigate } from 'react-router-dom'
import{goToPokedexPage,goHomePage} from '../../Routes/coordinator'

function Header() {
const navigate = useNavigate()



  return (
    <div>
        <button onClick={() => goToPokedexPage(navigate)}> Ir para Pokedex</button>
        <button onClick={() => goHomePage(navigate)}>Home</button>

    </div>


  )
}

export default Header