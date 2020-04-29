import React from 'react';

class LoginForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    showErrors() {
        const { errors } = this.props;
        return (<ul>
            {errors.map((err, idx) => {
                return <li key={idx}>{err}</li>
            })}
        </ul>)
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    render(){
        return (
            <div className="login-form-box">
                <div><i id="logo" className="fab fa-pinterest"></i></div>
                <h1>Welcome to Peridot</h1>
                <form onSubmit={this.handleSubmit} className="login-form">
                    {this.showErrors()}
                    <div className="login-fields">
                        <input type='text' placeholder="Email" value={this.state.email} onChange={this.update("email")} />
                        <input type='password' placeholder="Password" value={this.state.password} onChange={this.update("password")} />
                    </div>
                    <div className="login-form-buttons">
                        <button className="login-button">Log in</button>
                        <div>OR</div>
                        <button className="demo login-button">Demo Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginForm;