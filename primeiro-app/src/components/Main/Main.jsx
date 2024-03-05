import Image from '../../images/imagem 1.webp'
import Image2 from '../../images/imagem 2.jpg'
import Image3 from '../../images/image 3.webp'
import './Main.css'


const Main = () => {

    return (

        <main>

            <div>

                <img src={Image} />
                <h2></h2>

            </div>

            <div>

                <img src={Image2} />
                <h2></h2>

            </div>

            <div>

                <img src={Image3} />
                <h2></h2>

            </div>


        </main>

    )

}

export default Main;