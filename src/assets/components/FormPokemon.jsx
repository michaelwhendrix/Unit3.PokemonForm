import { useState } from "react";

const FormPokemon = ({allPokemon, setAllPokemon}) => {
    const [nameNewPoke, setNameNewPoke] = useState('');
    const [heightNewPoke, setHeightNewPoke] = useState('');
    const [weightNewPoke, setWeightNewPoke] = useState('');
    const [powerNewPoke, setPowerNewPoke] = useState('');
    return (
        <>
        <h2>Add A Pokemon Form</h2>
        <form>
            <label>Name
                <input type="text" name="name" onChange={(e) => setNameNewPoke(e.target.value)}></input>
            </label>
            <label>Height
                <input type="text" name="height"></input>
            </label>
            <label>Weight
                <input type="text" name="weight"></input>
            </label>
            <label>Power
                <input type="text" name="power"></input>
            </label>
            <button onClick={
                (e) => {
                    e.preventDefault();
                    setAllPokemon([...allPokemon, {name:nameNewPoke}])
                }
            }>Add Pokemon</button>
        </form>
        <p>{nameNewPoke}</p>
        </>
    )
}
export default FormPokemon;