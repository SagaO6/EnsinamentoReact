import Perfil from '../Perfil/Perfil'
import './Equipe.css'

const Equipe = (props) => {

    return (

        <>

            <h1 className='tituloEquipe'>{props.titulo}</h1>

            <div className='perfis'>

                <Perfil img={props.img1} titulo={props.nome1} />
                <Perfil img={props.img2} titulo={props.nome2} />
                <Perfil img={props.img3} titulo={props.nome3} />

            </div>

        </>

    )

}

export default Equipe;