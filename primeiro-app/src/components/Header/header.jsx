import Logo from '../../images/logo.png' 
import './header.css'

const Header = () => {

    return (
        <header className = 'menu'>

            <img src={Logo} />
            <h1>Exibir Perfil</h1>

        </header>
    )

}

export default Header