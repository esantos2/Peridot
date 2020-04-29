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
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.showErrors()}
                    <div className="login-fields">
                        <label>Email
                            <input type='text' value={this.state.email} onChange={this.update("email")} />
                        </label>
                        <label>Password
                            <input type='password' value={this.state.password} onChange={this.update("password")} />
                        </label>
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;