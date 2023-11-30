import React, {Component} from 'react';
import { Link  } from  'react-router-dom';
import myimage from '../img/myimage.png';
class Landing extends Component {
    render() {
        return (
            <div>
                <div className="section-main-landing">
                    <img className='myimage' src={myimage} alt="image" />
                    <div className="container">
                    
                        <div className="row">
                            <div className="columns six">
                                <h1 className="tribar-main-text">Blocks and Chains</h1>
                                
                                <h5>Access the transactions the way you want</h5>
                                
                                <button><Link to='/blocks'>Get Started</Link></button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                {/* Main Landing Page*/}
               

                <div className="section-get-started">
                    <div className="container">
                        {/*  How to get started  */}
                        <div className="row">
                            
                            <div className="columns six">
                                <h3>Get started with Blocks and Chains</h3>
                                <ul className="get-started-list">
                                    <li>View the transactions anytime</li>
                                    <li>Access these public keys, timestamps and also view the accounts log</li>
                                    <li>Real-time transactions updation</li>
                                </ul>
                                <button><Link to='/blocks'>Get Started</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-contact-me">
                    {/*    Contact Me Section */}
                    <div className="container">
                        <div className="row">
                            <div className="columns six">
                                <h3>Need help?</h3>
                                <p>Ping the creator up on @Telegram for quick help and easy communication!</p>
                                <a href="https://t.me/anishashabnamm" className="button">Let's Talk</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;