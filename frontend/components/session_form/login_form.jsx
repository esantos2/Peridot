import React from 'react';
import { Link } from 'react-router-dom';
import { getSplashBack } from '../../util/splash_background_util';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoUser(e){
        e.preventDefault();
        const user = {
            email: "demouser@gmail.com",
            password: "123456"
        }
        this.props.processForm(user);
    }

    render(){
        const {errors} = this.props;
        return (
            <div>
                {getSplashBack()}
                <div className="modal-background">
                    <div className="side-button">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className="login-form-box">
                            <form className="login-form">
                                <div className="login-heading">
                                    <div><i id="logo" className="fab fa-pinterest"></i></div>
                                    <h1>Welcome to Peridot</h1>
                                </div>
                                <div className="login-fields">
                                    <input type='text' placeholder="Email" value={this.state.email} onChange={this.update("email")} />
                                    <input type='password' placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                                </div>
                                <div className="error">
                                    {errors.length > 0 ? errors[0] : ""}
                                </div>
                                <div className="login-form-buttons">
                                    <button className="login-button button" onClick={this.handleSubmit} >Log in</button>
                                    <div>OR</div>
                                    <button className="demo login-button button" onClick={this.demoUser}>Demo Login</button>
                                </div>
                            </form>
                            <div className="signup-link">
                                <Link to='/signup'>Not on Peridot yet? Sign up</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;