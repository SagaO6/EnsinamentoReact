import Papyrus from '../../images/Papyrus.png'
import './Descricao2.css'

const Descricao2 = () => {

    return (

        <>

            <h1 className='tituloPapyrus'>Papyrus</h1>

            <div className='dividirPapyrus'>

                <img className='imgPapyrus' src={Papyrus} />

                <div className='papyrus'>

                    <p>Papyrus é um dos principais personagens em Undertale (também irmão mais novo de Sans).
                        <br></br>O seu grande desejo é capturar um humano, para assim, se tornar um membro da 
                        Guarda Real pois segundo ele, isso o encherá de popularidade.
                    </p>

                </div>

            </div>

        </>

    )
}

export default Descricao2;