import Sans from '../../images/Sans.png'
import './Descricao.css'


const Descricao = () => {

    return (

        <>

            <h1>Sans</h1>

            <div className='dividir'>

                <img className = 'imgDescricao' src={Sans} />

                <div className='text'>

                    <p>"Eis aqui uma descrição que eu irei mudar quando chegar em casa. <br></br>Thiago altere essa merda logo."<br></br>- Sans</p>

                </div>

            </div>

        </>

    )

}

export default Descricao;