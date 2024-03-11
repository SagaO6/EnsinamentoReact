import Sans from '../../images/Sans.png'
import Papyrus from '../../images/Papyrus.png'
import Frisk from '../../images/Frisk.png'
import Flowey from '../../images/Flowey.png'
import Toriel from '../../images/Toriel.png'
import Asgore from '../../images/Asgore.png'
import './Main.css'
import Equipe from '../Equipe/Equipe'

const Main = () => {

    return (
        <>

            <main className='main'>

                <Equipe titulo={'Amizade'} img1={Sans} nome1={"Sans"} img2={Papyrus} nome2={"Papyrus"} img3={Flowey} nome3={"Flowey"} />
                <Equipe titulo={'Determinação'} img1={Frisk} nome1={"Frisk"} img2={Toriel} nome2={"Toriel"} img3={Asgore} nome3={"Asgore"} />

            </main>

        </>
    )

}

export default Main;