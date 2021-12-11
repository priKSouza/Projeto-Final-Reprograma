import { VscGithubInverted } from 'react-icons/vsc'
import './footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <span>Priscila Souza <a className="git" target="_blank" rel="noreferrer" href="https://github.com/priKSouza"><VscGithubInverted/></a></span>
        </div>
    )
}

export default Footer