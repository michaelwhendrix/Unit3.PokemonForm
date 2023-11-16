import { useEffect, useState } from "react";

const CardOfPokemon = ({singlePokemonId}) => {
const [singlePoke, setSinglePoke] = useState([]);

useEffect(()=> {
    const getSinglePokemon = async() => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${singlePokemonId}`);
        const data = await response.json();
        console.log(data);
        setSinglePoke(data);
    }

    getSinglePokemon();
},[]);

}


export default CardOfPokemon;