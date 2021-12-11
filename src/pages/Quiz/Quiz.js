import Menu from "../../components/Menu/Menu"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import ImageQuiz from "../../assets/quiz.svg"


const Quiz = () => {
    return(
        <>
        <Menu />
        <Header image={ImageQuiz}/>
        <h3></h3>
        <Footer />
        </>
    )
}

export default Quiz