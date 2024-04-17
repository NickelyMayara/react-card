import './Card.css'

// eslint-disable-next-line react/prop-types
const Card = ({ icon, title, text}) => {
    return (
        <div className='box' >
            <p><img className='icone' src={icon} alt="#" /></p>
            <h1 className='titulo'>{title}</h1>
            <p className='texto'>{text}</p>
        </div>
    )
}

export default Card;