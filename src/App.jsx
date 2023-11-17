import { useState } from 'react'
import './App.css'
import AllPokemon from './assets/components/AllPokemon.jsx'
import FormPokemon from './assets/components/FormPokemon.jsx'

function App() {
  const [allPokemon, setAllPokemon] = useState([]);

  return (
    <>
      <h1>Pokemon World</h1>
      <FormPokemon allPokemon={allPokemon} setAllPokemon={setAllPokemon}/>
      <AllPokemon allPokemon={allPokemon} setAllPokemon={setAllPokemon}/>
    </>
  )
}

export default App
