import React, { useState, useEffect } from 'react'
import Flowey from '../../images/Flowey.png'
import './Descricao3.css'

const Descricao3 = () => {

    const [displayText, setDisplayText] = useState('');
    const fullText = "Flowey é o primeiro personagem principal encontrado pelo protagonista em Undertale. Atua como antagonista na maior parte do jogo especificamente na Rota neutar e Verdadeira pacifista. Flowey pode ser considerado como um deuteragonista na Rota genocida.";
    const speed = 50;

    useEffect(() => {

        let index = 0;
        const interval = setInterval(() => {

            if (index <= fullText.length) {
                setDisplayText(fullText.substring(0, index));
                index++;
            }

            else {

                clearInterval(interval);

            }

        }, speed);

        return () => clearInterval(interval);

    }, [fullText]);

    return (

        <>

            <h1 className='tituloFlowey'>Flowey</h1>

            <div className='dividirFlowey'>

                <div className='relative'>

                    <img className='imgFlowey' src={Flowey} />

                </div>

                <div className='flowey'>

                    <p className='floweyText'>{displayText}</p>

                </div>

            </div>

        </>

    )

}

export default Descricao3