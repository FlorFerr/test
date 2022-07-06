import { useState } from 'react'
const Greeting = () => {
    const [changeText, setChangeText] = useState(false)

    const changeTextHandler = ()=>{
        setChangeText(prevState => !prevState)
    }

    return(
        <div>
            <h2>Prueba</h2>
            {changeText ? <p>Esta es una prueba</p> :
            <p>Esta es OTRA prueba</p>}
            
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    )

}

export default Greeting;