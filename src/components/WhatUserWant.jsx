
import { useState, useCallback, useEffect } from "react";

function WhatUserWant () {


        const [word,setWord]=useState("")

        const takeWord = (event) => {
            const a = event.target.value
            setWord(a)

        }    
        const logging = useCallback(()=> {
            console.log(`Your word is: ${word}`)
        }, [word])
    
        useEffect(()=>{
    
            logging() 
    
        },[logging]) 
    
        return <div>
                <p>Type word</p>
                <input type="text" onChange={takeWord} />
                <p>Your word: {word}</p>
            </div> 
    

}

export default WhatUserWant
