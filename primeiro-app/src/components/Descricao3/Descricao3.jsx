import Image3 from '../../images/imagem 2.jpg'
import '../Descricao/Descricao.css'

const Descricao3 = () => {

    return (

        <>

            <h1>O que colocar ?</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Image3} />

                <div className='text'>

                    <p>"Foda-se"<br />- Saiko, 2023</p>

                </div>

            </div>

        </>

    )

}

export default Descricao3