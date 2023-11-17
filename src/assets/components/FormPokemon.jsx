import { useState } from "react";

const FormPokemon = ({allPokemon, setAllPokemon}) => {
    const [nameNewPoke, setNameNewPoke] = useState('');
    const [heightNewPoke, setHeightNewPoke] = useState('');
    const [weightNewPoke, setWeightNewPoke] = useState('');
    const [powerNewPoke, setPowerNewPoke] = useState('');
    return (
        <>
        <h2>Add A Pokemon Form</h2>
        <form id="pokForm">
            <label>Name
                <input type="text" name="name" onChange={(e) => setNameNewPoke(e.target.value)}></input>
            </label>
            <label>Height
                <input type="text" name="height" onChange={(e) => setHeightNewPoke(e.target.value)}></input>
            </label>
            <label>Weight
                <input type="text" name="weight" onChange={(e) => setWeightNewPoke(e.target.value)}></input>
            </label>
            <label>Power
                <input type="text" name="power" onChange={(e) => setPowerNewPoke(e.target.value)}></input>
            </label>
            <button onClick={
                (e) => {
                    e.preventDefault();
                    setAllPokemon([...allPokemon, {name:nameNewPoke}])                  
                }
            }>Add Pokemon</button>
        </form>
        </>
    )
}
export default FormPokemon;