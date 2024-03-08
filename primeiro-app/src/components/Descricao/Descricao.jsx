import Sans from '../../images/Sans.png'
import sans from '../../images/Gif_Sans.webp'
import './Descricao.css'


const Descricao = () => {

    return (

        <>

            <h1>Sans</h1>

            <div className='dividir'>

                <img className='imgDescricao' src={Sans} />

                <div className='sans'>

                    <p>Sans é o irmão mais velho de papyrus e um personagem de grande importancia em Undertale. É um persongam que apoia e ajuda o jogador em alguns finais da 
                        Rota neutra nos que você não mata o Papyrus e na rota Pacifista sendo também o antagonista heróico e Boss final na Rota genocida </p>

                </div>

            </div>

        </>

    )

}

export default Descricao;