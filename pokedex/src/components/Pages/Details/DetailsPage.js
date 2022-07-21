import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Header/Header'
import {goBack} from '../../../Routes/coordinator'
import axios from 'axios'


function DetailsPage() {
 const navigate = useNavigate()
 const {name} = useParams()
 const [PokeName, setPokeName] = useState('')
 const [pokeFrontImage, setPokeFrontImage] = useState({})
 const [pokeBackImage, setPokeBackImage] = useState({})
 const [pokeStats, setpokeStats] = useState([])

 
 useEffect(() =>{
  getDataPokemon()


 },[name])


 const getDataPokemon = () =>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  .then((resp)=>{
    setPokeName(resp.data.name)
    setPokeFrontImage(resp.data.sprites.front_default)
    setPokeBackImage(resp.data.sprites.back_default)
    setpokeStats(resp.data.stats)

  }).catch((err)=>{
    console.log(err)

  })

 }


const PokeStatusName = pokeStats && pokeStats.map((stats)=>{
  return(
    <p>{stats.stat.name}</p>
  )


})


  return (
    <div>
      <Header HeaderButton = {() => goBack(navigate)}/>
      <h1>DetailsPage</h1>
      <p>{PokeName}</p>
      <img src={pokeFrontImage}></img>
      <img src={pokeBackImage}></img>
      <h1>Status</h1>
      {PokeStatusName}
      <div>

      </div>

    </div>
  )
}

export default DetailsPage