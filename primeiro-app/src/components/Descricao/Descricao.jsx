import Image from '../../images/image 3.jpg'
import './Descricao.css'


const Descricao = () => {

    return (

        <>

            <h1>Mude</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Image} />

                <div className='text'>

                    <p>"Eis aqui uma descrição que eu irei mudar quando chegar em casa. <br></br>Thiago altere essa merda logo."<br></br>-Thiago Rivas, 2024</p>

                </div>

            </div>

        </>

    )

}

export default Descricao;