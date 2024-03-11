import Sans from '../../images/Sans.png'
import './Descricao.css'


const Descricao = () => {

    return (

        <>

            <h1 className = 'tituloSans'>Sans</h1>

            <div className='dividirSans'>

                <img  className='imgSans' src={Sans} />

                <div className='sans'>

                    <p>Sans é um personagem que apoia o jogador em alguns finais da Rota neutra, 
                        nos que voce não mata o Papyrus (O seu irmão mais novo).
                        e também na Rota pacifista.<br></br>Sendo o antagonista e Boss final na Rota genocida.
                    </p>

                </div>

            </div>

        </>

    )

}


export default Descricao;