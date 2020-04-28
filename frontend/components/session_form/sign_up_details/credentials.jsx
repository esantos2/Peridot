import React from 'react'

class Credentials extends React.Component {

    constructor(props){
        super(props)
        this.checkForm = this.checkForm.bind(this);
    }

    checkForm(e){
        e.preventDefault();
        //validate fields
        this.props.nextStep();
    }

    render(){
        const { values } = this.props;
        return (
            <form className="sign-up-form" >
                <label>Email
                    <input type='text' value={values.email} onChange={this.props.update("email")} />
                </label>
                <label>Password
                    <input type='password' value={values.password} onChange={this.props.update("password")} />
                </label>
                <label>Age
                    <input type='text' value={values.age} onChange={this.props.update("age")} />
                </label>
                <button onClick={this.checkForm}>{'>'}</button>
            </form>
        )
    }
}

export default Credentials;