import { useEffect, useState } from "react";
import CardOfPokemon from "./CardOfPokemon";

const AllPokemon =({allPokemon, setAllPokemon}) => {
    const [singlePokemonId, setSinglePokemonId] = useState(null);

useEffect( () => {
    const getAllPokemon = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await response.json();
            setAllPokemon(data.results);
        }catch(error){console.error(error);}
    }
    getAllPokemon();
},[]);
return (
    <>
    {singlePokemonId ? <CardOfPokemon singlePokemonId={singlePokemonId} setSinglePokemonId={setSinglePokemonId}/> : 
    <ul>
    {allPokemon.map((poke)=> {
        return (<li onClick={() => setSinglePokemonId(poke.name)} key={poke.name}>
            <h3>{poke.name}</h3> 
        </li>
    )})}
    </ul>
    }
        
    </>
)


}

export default AllPokemon;