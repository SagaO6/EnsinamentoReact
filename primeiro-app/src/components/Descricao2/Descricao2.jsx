import React, { useState, useEffect } from 'react'
import Papyrus from '../../images/Papyrus.png'
import './Descricao2.css'

const Descricao2 = () => {

    const [displayText, setDisplayText] = useState('');
    const fullText = 'Papyrus é um dos principais personagens em Undertale (também irmão mais novo de Sans). O seu grande desejo é capturar um humano, para assim, se tornar um membro da Guarda Real pois segundo ele, isso o encherá de popularidade.';
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

            <h1 className='tituloPapyrus'>Papyrus</h1>

            <div className='dividirPapyrus'>

                <div className='relative'>

                    <img className='imgPapyrus' src={Papyrus} />

                </div>

                <div className='papyrus'>

                    <p className='papyrusText'>{displayText}</p>

                </div>

            </div>

        </>

    )
}

export default Descricao2;