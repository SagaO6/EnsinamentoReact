import Image from '../../images/imagem 1.webp'
import Image2 from '../../images/imagem 2.jpg'
import Image3 from '../../images/image 3.webp'
import './Main.css'


const Main = () => {

    return (
        <>
            <main className='perfis'>

                <h1 className='t-center'>DeadCells</h1>

                <div className='t-center'>

                    <img src={Image} />
                    <h2>Wallpaper</h2>

                </div>

                <div className='t-center'>

                    <img src={Image2} />
                    <h2>Titulo</h2>

                </div>

                <div className='t-center'>

                    <img src={Image3} />
                    <h2>Personagem</h2>

                </div>


            </main>

        </>
    )

}

export default Main;