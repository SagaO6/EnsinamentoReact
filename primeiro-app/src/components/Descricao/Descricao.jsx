import React, { useState, useEffect } from 'react'
import Sans from '../../images/Sans.png'
import './Descricao.css'


const Descricao = () => {

    const [displayText, setDisplayText] = useState('');
    const fullText = "Sans é um personagem que apoia o jogador em alguns finais da Rota neutra, nos que voce não mata o Papyrus (O seu irmão mais novo). E também na Rota pacifista.Sendo o antagonista e Boss final na Rota genocida."
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

        }, speed)

        return () => clearInterval(interval);

    }, [fullText]);

    return (

        <>

            <h1 className='tituloSans'>Sans</h1>

            <div className='dividirSans'>

                <div className='relative'>

                    <img className='imgSans' src={Sans} />

                </div>

                <div className='sans'>

                    <p className='sansText'>{displayText}</p>

                </div>

            </div>

        </>

    )

}


export default Descricao;