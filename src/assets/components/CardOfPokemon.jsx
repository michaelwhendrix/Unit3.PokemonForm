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
console.log(singlePoke.moves);
return (
    <>
        <h2>{singlePoke.name}</h2>
        <h3>Height: {singlePoke.height}</h3>
        <h3>Weight: {singlePoke.weight}</h3>
        <h3>Base Experience: {singlePoke.base_experience}</h3>
        <h3>Moves:</h3>
        {singlePoke.moves ? singlePoke.moves.map((mov) => {
           return <div key={mov.move.name}>{mov.move.name} </div>
        }) :<h3>Loading</h3>
        }
        <button onClick={()=> setSinglePokemonId(null)}>Back</button>
    </>
)

}


export default CardOfPokemon;