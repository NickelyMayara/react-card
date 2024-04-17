import './Botao.css'

// eslint-disable-next-line react/prop-types
const Botao = ({texto, corTexto}) => {
    return(
        <button style={{color: corTexto}}>{texto}</button>
    ) 
}

export default Botao;