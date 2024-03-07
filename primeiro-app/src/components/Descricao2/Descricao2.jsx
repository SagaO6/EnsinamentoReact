import Image2 from '../../images/imagem 1.jpg'
import '../Descricao/Descricao.css'

const Descricao2 = () => {

    return (

        <>

            <h1>Vou pensar depois</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Image2} />

                <div className='text'>

                    <p>"Com calma e jeito chega-se ao cu <br /> de qualquer sujeito"<br />- Minha vó, 2005</p>

                </div>

            </div>

        </>

    )
}

export default Descricao2;