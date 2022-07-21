import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../Header/Header'
import {goBack} from '../../../Routes/coordinator'

function DetailsPage() {
 const navigate = useNavigate()

  return (
    <div>
      <Header HeaderButton = {() => goBack(navigate)}/>
      <h1>DetailsPage</h1>
    </div>
  )
}

export default DetailsPage