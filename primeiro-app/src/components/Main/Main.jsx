import Sans from '../../images/Sans.png'
import Papyrus from '../../images/Papyrus.png'
import Frisk from '../../images/frisk.png'
import Flowey from '../../images/Flowey.png'
import Toriel from '../../images/Toriel.png'
import Asgore from '../../images/Asgore.png'
import './Main.css'
import Equipe from '../Equipe/Equipe'

const Main = () => {

    return (
        <>

            <main>

                <Equipe titulo={'Amizade'} img1={Sans} nome1={"Sans"} img2={Papyrus} nome2={"Papyrus"} img3={Frisk} nome3={"Frisk"} />
                <Equipe titulo={'Determinação'} img1={Flowey} nome1={"Flowey"} img2={Toriel} nome2={"Toriel"} img3={Asgore} nome3={"Asgore"} />

            </main>

        </>
    )

}

export default Main;