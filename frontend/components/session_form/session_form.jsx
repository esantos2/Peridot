import React from 'react';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    render(){
        const {errors, formType} = this.props;
        return (
            <div className="session-form">
                <h1>{formType}</h1>

                <ul>
                    {errors.map( (err, idx) => {
                        return <li key={idx}>{err}</li>
                    })}
                </ul>
                
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type='text' value={this.state.email} onChange={this.update("email")} />
                    </label>
                    <label>Password
                        <input type='password' value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <button>{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;