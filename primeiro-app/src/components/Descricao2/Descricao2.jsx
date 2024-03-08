import Papyrus from '../../images/Papyrus.png'
import './Descricao2.css'

const Descricao2 = () => {

    return (

        <>

            <h1>Papyrus</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Papyrus} />

                <div className='papyrus'>

                    <p>Papyrus é o irmão mais novo de Sans e um dos personagens principais em Undertale.
                        Ele quer capturar um humano para virar um mebro da Guarda Real que, segundo ele, o encherá de popularidade.</p>

                </div>

            </div>

        </>

    )
}

export default Descricao2;