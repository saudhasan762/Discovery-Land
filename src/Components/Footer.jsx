import { Component } from 'react'
import '../Css/dashboard.css'
import foot_logo from '../Asset/footlogo.svg'

export default class Footer extends Component{
    render(){
        return(
            <div>
                <footer className="footer">
                <div className="footercontainer">
                    <div className="logoactual">
                        <img src={foot_logo} alt=""></img>
                    </div>
                    <div id="item2">
                        <div className="secondfooteritems">
                            Get In Touch
                        </div>
                        <div className="secondfooteritems">
                            (480) 624-5200
                        </div>
                        <div className="secondfooteritems">
                            mail@discovery.com
                        </div>

                    </div>

                    <div id="item3">
                        <div className="thirdfooteritems">
                            About DLC
                        </div>
                        <div className="thirdfooteritems">
                            Our Worlds
                        </div>
                        <div className="thirdfooteritems">
                            Experiences
                        </div>
                        <div className="thirdfooteritems">
                            Gallery
                        </div>
                        <div className="thirdfooteritems">
                            Press
                        </div>
                    </div>

                    <div id="item4">
                        <div className="fourthfooteritems">
                            Magazine
                        </div>
                        <div className="thirdfooteritems">
                            Carrers
                        </div>
                        <div className="thirdfooteritems">
                            Foundation
                        </div>
                        <div className="thirdfooteritems">
                            Company
                        </div>
                        <div className="thirdfooteritems">
                            Contact
                        </div>
                        <div className="thirdfooteritems">
                            Privacy
                        </div>

                    </div>
                </div>
            </footer>
            </div>
        )
    }
}