import Image from '../../images/imagem 1.webp'
import Image2 from '../../images/imagem 2.jpg'
import Image3 from '../../images/image 3.webp'
import './Main.css'
import Perfil from '../Perfil/Perfil'

const Main = () => {

    return (

            <main className='perfis'>

                <h1 className='t-center'>DeadCells</h1>

                <div>

                    <Perfil img={Image} titulo={'Wallpaper'} />
                    <Perfil img={Image2} titulo={'Titulo'} />
                    <Perfil img={Image3} titulo={'Personagem'} />

                </div>

            </main>

    )

}

export default Main;