import Perfil from '../Perfil/Perfil'
import './Equipe.css'
import { Link } from 'react-router-dom'

const Equipe = (props) => {

    return (

        <>

            <h1 className='tituloEquipe'>{props.titulo}</h1>

            <div className='perfis'>

                <Link to='/desc-Sans'>

                    <Perfil img={props.img1} titulo={props.nome1} />

                </Link>


                <Link to='/desc-Papyrus'>

                    <Perfil img={props.img2} titulo={props.nome2} />

                </Link>

                <Link to = '/desc-Flowey'>

                    <Perfil img={props.img3} titulo={props.nome3} />

                </Link>

                <Perfil img={props.img4} titulo={props.nome4} />
                <Perfil img={props.img5} titulo={props.nome5} />
                <Perfil img={props.img6} titulo={props.nome6} />

            </div>

        </>

    )

}

export default Equipe;