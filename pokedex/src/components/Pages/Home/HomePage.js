import React from 'react'
import { useNavigate } from 'react-router-dom'
import{goDetailPage} from '../../../Routes/coordinator'

function HomePage() {
  const navigate = useNavigate()



  return (
    <div>
      <h1>HomePage</h1>
        <button onClick={() =>goDetailPage(navigate)}>Detalhes</button>
    </div>
  )
}

export default HomePage