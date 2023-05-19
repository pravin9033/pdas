import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'
import 'bulma/css/bulma.css'

function App () {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body"> 
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>
            

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Alexa" 
                                handle ="@alexa123" 
                                image = {AlexaImage}
                                description ="hey this is Amazon Alexa! Nice to meet You"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Cortana" 
                                handle ="@cortana456" 
                                image = {CortanaImage} 
                                description ="hey this is Microsoft Cortana! Nice to meet You"
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard 
                                title ="Siri" 
                                handle ="@siri789" 
                                image = {SiriImage}
                                description ="hey this is Apple Siri! Nice to meet You"
                            />
                        </div>
                    </div>
                </section>
            </div>
            
            
            
        </div>
    );
}

export default App;