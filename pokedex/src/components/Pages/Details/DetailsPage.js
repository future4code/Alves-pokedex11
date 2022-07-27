import React,{ useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../Header/Header'
import {goBack} from '../../../Routes/coordinator'
import {DetailsBackground, Title, DetailContainer, FrontSprite, BackSprite, StatusContainer, MoveContainer , TypeStyle, PokeNameTitle, ImgPoke} from "./styled"
import axios from 'axios'


function DetailsPage() {
 const navigate = useNavigate()
 const {name} = useParams()
 const [PokeName, setPokeName] = useState('')
 const [pokeFrontImage, setPokeFrontImage] = useState({})
 const [pokeBackImage, setPokeBackImage] = useState({})
 const [pokeStats, setpokeStats] = useState([])
 const [pokeMoves, setpokeMoves] = useState([])
 const [pokeType, setpokeType] = useState([])

 
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
    setpokeMoves(resp.data.moves)
    setpokeType(resp.data.types)

  }).catch((err)=>{
    console.log(err)

  })

 }

const PokeStatusName = pokeStats && pokeStats.map((stats)=>{
  return(
    <div key ={stats.stat.name}>
    <strong>{stats.stat.name}:</strong>
    <p>{stats.base_stat}</p>
    </div>
  )


})

const MoveList = pokeMoves && pokeMoves.map((move, index) =>{
    return(
      index < 5 && <p key = {move.move.name} >{move.move.name}</p>
    )

})

const TypePokemon = pokeType && pokeType.map((type) =>{
    return(
      <div>
        <ul>
      <TypeStyle key ={type.type.name} >{type.type.name}</TypeStyle>
        </ul>
      </div>
    )

})


  return (
    <div>
    <Header HeaderButton = {() => goBack(navigate)}/>
    <DetailsBackground>
      <Title>Detalhes</Title>
      <DetailContainer>
      <PokeNameTitle>{PokeName.toLocaleUpperCase()}</PokeNameTitle>
      <FrontSprite>
      <ImgPoke src={pokeFrontImage}></ImgPoke>
      </FrontSprite>
      <BackSprite>
      <ImgPoke src={pokeBackImage}></ImgPoke>
      </BackSprite>
      <StatusContainer>
      <h1>Status</h1>
      {PokeStatusName}
      </StatusContainer>
      <MoveContainer>
      <h1>Ataques</h1>
      {MoveList}
      </MoveContainer>
      {TypePokemon}
       </DetailContainer>

    </DetailsBackground>
    </div>
  )
}

export default DetailsPage