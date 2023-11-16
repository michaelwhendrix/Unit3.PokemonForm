import { useEffect, useState } from "react";

const CardOfPokemon = ({singlePokemonId,setSinglePokemonId}) => {
const [singlePoke, setSinglePoke] = useState([]);
const [abilities, setAbilities] = useState([]);

useEffect(()=> {
        const getSinglePokemon = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemonId}`);
            const data = await response.json();
            console.log(data);
            setSinglePoke(data);
            setAbilities(data.abilities);
            console.log(abilities);
        }catch(error){console.error(error)}
    }
    getSinglePokemon();
},[]);

return (
    <>
        <h2>{singlePoke.name}</h2>
        <h3>Height: {singlePoke.height}</h3>
        <h3>Weight: {singlePoke.weight}</h3>
        <h3>Base Experience: {singlePoke.base_experience}</h3>
        <button onClick={()=> setSinglePokemonId(null)}>Back</button>
    </>
)

}


export default CardOfPokemon;