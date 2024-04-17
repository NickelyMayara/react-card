import './Container.css'
import Card from '../Card/Card'
import Botao from '../Botao/Botao'

// eslint-disable-next-line react/prop-types
const Container = ({ cor, img, title, textCard, textBotao, corTextoBotao, borderRadius }) => {
    
    return (
        <section className='card' style={{backgroundColor: cor, borderRadius: borderRadius}}>
            <Card
                icon={img}
                title={title}
                text={textCard}

            />

            <Botao
                texto={textBotao}
                corTexto={corTextoBotao}
            />
        </section>

    )
}

export default Container;