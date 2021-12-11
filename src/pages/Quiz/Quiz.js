import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ImageQuiz from "../../assets/quiz.svg"
import Jogo from "../../components/Jogo"

const Quiz = () => {
    return(
        <>
        <Menu />
        <Header image={ImageQuiz}/>
        <Jogo />
        <Footer />
        </>
    )
}

export default Quiz