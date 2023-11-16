import { useEffect, useState } from "react";

const AllPokemon =() => {
    const [allPokemon, setAllPokemon] = useState([]);

useEffect( () => {
    const getAllPokemon = async() => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
            const data = await response.json();
            console.log(data.results);
            setAllPokemon(data.results);
        }catch(error){console.error(error);}
    }
    getAllPokemon();
},[]);
return (
    <>
        <ul>
            {allPokemon.map((poke)=> {
                return (<li onClick={() => console.log("test")} key={poke.name}>
                    <h3>{poke.name}</h3> 
                </li>
            )})}
        </ul>
    </>
)


}

export default AllPokemon;