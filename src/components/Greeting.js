import { useState } from 'react'
const Greeting = () => {
    const [changedText, setChangedText] = useState(false)

    const changeTextHandler = ()=>{
        setChangedText(prevState => !prevState)
    }

    return(
        <div>
            <h2>Prueba</h2>
            {changedText ? <p>Changed!</p> :
            <p>Not changed!</p>}
            
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )

}

export default Greeting;