import { useEffect, useState } from "react";

const CardOfPokemon = ({singlePokemonId,setSinglePokemonId}) => {
const [singlePoke, setSinglePoke] = useState([]);

useEffect(()=> {
        const getSinglePokemon = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemonId}`);
            const data = await response.json();
            console.log(data);
            setSinglePoke(data);
        }catch(error){console.error(error)}
    }
    getSinglePokemon();
},[]);

return (
    <>
        <h2>{singlePoke.name}</h2>
        <button onClick={()=> setSinglePokemonId(null)}>Back</button>
    </>
)

}


export default CardOfPokemon;