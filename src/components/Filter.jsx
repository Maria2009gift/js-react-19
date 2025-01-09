import { useMemo, useCallback, useState } from "react";

function Filter() {

    const [inputValue, setInputValue] = useState("");
    const [listAnimals, setListAnimals] = useState(["cat", "dog", "cow",]);
    const [animal, setAnimal] = useState("No animal yet")

    

    const animalSearch = (event) => {
        const searchAnimal = event.target.value
        setInputValue(searchAnimal)
    }

    const animalRender =  useMemo(() => {
        const willfilteredAnimals = [...listAnimals]

            const filteredAnimals = willfilteredAnimals.find(
                (animal) => animal === inputValue
              );
              setAnimal(filteredAnimals)
              console.log("Rendered");
   
    }, [inputValue, listAnimals])

    
    
    return (
    <>
      <div>
        <h2>My Animal</h2>
        <input type="text" onChange={animalSearch} placeholder="Type your animal"/>
        <button onClick={animalRender}>Get animal</button>
        <div>
            <p>Your animal: {animal}</p>

        </div>
        <p>Option animal:</p>
        <ul>
            {listAnimals.map((a) => <li>{a}</li>)}
        </ul>
      </div>
      <hr />
      {/* <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Марнотратний розрахунок</h2>
        {calculation}
      </div> */}
    </>
    );
    };
  


export default Filter;



