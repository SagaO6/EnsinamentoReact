import Papyrus from '../../images/Papyrus.png'
import '../Descricao/Descricao.css'

const Descricao2 = () => {

    return (

        <>

            <h1>Papyrus</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Papyrus} />

                <div className='text'>

                    <p>"Com calma e jeito chega-se ao cu <br /> de qualquer sujeito"<br />- Papyrus</p>

                </div>

            </div>

        </>

    )
}

export default Descricao2;