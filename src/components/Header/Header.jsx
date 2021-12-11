import './header.css'

const Header = (props) => {
    return(
        <div className="header">
            <img src={props.image} alt="Ilustração" />
            <h1>{props.children}</h1>
        </div>
    )
}

export default Header