import React from 'react'
import DetailsPage from '../components/Pages/Details/DetailsPage'
import HomePage from '../components/Pages/Home/HomePage'
import PokedexPage from '../components/Pages/Pokedex/PokedexPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Router() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path = "details/:name" element = {<DetailsPage/>}/>
        <Route path = "pokedex" element = {<PokedexPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router