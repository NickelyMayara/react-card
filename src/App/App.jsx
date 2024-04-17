import './App.css'
import Container from '../Container/Container'

import icon1 from '../../images/icon-sedans.svg'
import icon2 from '../../images/icon-suvs.svg'
import icon3 from '../../images/icon-luxury.svg'

const App = () => {

    return (
        <section className='containers'>
            <div className='container1'>
                <Container cor='#e38826' img={icon1} title='SEDANS'
                    textCard='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    textBotao='Learn More'
                    borderRadius='10px 0px 0px 10px'
                    corTextoBotao='#e38826'
                />
            </div>

            <div className='container2'>
                <Container cor='#006970' img={icon2} title='SUVS'
                    textCard='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    textBotao='Learn More'
                    corTextoBotao='#006970'
                />
            </div>

            <div className='container3'>
                <Container cor='#004241' img={icon3} title='LUXURY'
                    textCard='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    textBotao='Learn More'
                    borderRadius='0px 10px 10px 0px'
                    corTextoBotao='#004241'
                />
            </div>

        </section>
    )
}

export default App;