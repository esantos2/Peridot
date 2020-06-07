import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component{
    
    constructor(props){
        super(props);
        this.demoUser = this.demoUser.bind(this);
    }

    componentDidMount(){
        let body = document.querySelector("body");
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    componentWillUnmount(){
        let body = document.querySelector("body");
        body.style.height = "auto";
        body.style.overflow = "visible";
    }

    demoUser(e){
        e.preventDefault();
        const user = {
            email: "demouser@gmail.com",
            password: "123456"
        }
        this.props.processForm(user);
    }

    getSplashBack(){
        const urlStart = "https://peridot-seed.s3-us-west-1.amazonaws.com/Splash/splash(";
        const urlEnd = ").jpg";
        const imgUrls = [];
        let col = [];
        for (let i = 4; i <= 27; i++){
            col.push(urlStart + i + urlEnd);
            if (i % 3 === 0){
                imgUrls.push(col);
                col = [];
            }
        }

        return (
            <div className="splash-back">
                {imgUrls.map((col, i) => {
                    return (
                        <div key={i} className="splash-col">
                            {col.map((url) => {
                                return (
                                    <div key={url} className="tile-box">
                                        <img className="tile-img" src={url}/>
                                        <div className="pin-space"></div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }

    render(){
        return (
            <div>
                {this.getSplashBack()}
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className="login-signup">
                            <div><i id="logo" className="fab fa-pinterest"></i></div>
                            <h2>Welcome to Peridot</h2>
                            <div>Find new ideas to try</div>
                            <div className="buttons">
                                <Link to='/login'>
                                    <button className="login-button button">Log in</button>
                                </Link>
                                <Link to='/signup'>
                                    <button className="signup-button button">Sign up</button>
                                </Link>
                            </div>
                            <div>
                                <Link to='/'>
                                    <button className="welcome-demo button" onClick={this.demoUser}>Demo</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;