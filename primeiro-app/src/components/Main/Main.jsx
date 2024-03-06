import Image from '../../images/imagem 1.webp'
import Image2 from '../../images/imagem 2.jpg'
import Image3 from '../../images/image 3.webp'
import './Main.css'
import Equipe from '../Equipe/Equipe'

const Main = () => {

    return (
        <>

            <main>

                <Equipe titulo={'imagens'} img1={Image} nome1={"Wallpaper"} img2={Image2} nome2={"Nome"} img3={Image3} nome3={"Personagem"} />
                <Equipe titulo={'imagens'} img1={Image} nome1={"Wallpaper"} img2={Image2} nome2={"Nome"} img3={Image3} nome3={"Personagem"} />

            </main>

        </>
    )

}

export default Main;