import './Perfil.css'

const Perfil = (props) => {

    return (

        <div className='tituloPerfil'>

            <img src={props.img} />
            <h2>{props.titulo}</h2>

        </div>

    )

}

export default Perfil;