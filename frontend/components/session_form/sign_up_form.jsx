import React from 'react';
import Credentials from './sign_up_details/credentials';

class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            email: '',
            password: '',
            age: '',
            username: '',
            first_name: '',
            last_name: '',
            gender: '',
            language: '',
            region: ''
        }
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.update = this.update.bind(this);
    }

    showErrors(){
        const {errors} = this.props;
        return (<ul>
            {errors.map((err, idx) => {
                return <li key={idx}>{err}</li>
            })}
        </ul>)
    }

    validateInput(field){
        
    }

    nextStep(e){
        const {step} = this.state;
        this.setState({ step: step + 1})
    }

    prevStep(e){
        const {step} = this.state;
        this.setState({ step: step - 1})
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getNames(){
        const {username, first_name, last_name} = this.state;
        return (
            <form className="sign-up-form">
                {this.showErrors()}
                <label>Username
                    <input type='text' value={username} onChange={this.update("username")} />
                </label>
                <label>First Name
                    <input type='text' value={first_name} onChange={this.update("first_name")} />
                </label>
                <label>Last Name
                    <input type='text' value={last_name} onChange={this.update("last_name")} />
                </label>
                <button onClick={this.prevStep}>{'<'}</button>
                <button onClick={this.nextStep}>{'>'}</button>
            </form>
        )
    }

    getGender(){
        return (
            <form className="sign-up-form">
                <p>Gender</p>
                {this.showErrors()}
                <input type="radio" id="male" value="male" onClick={this.update("gender")}/>
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" value="female" onClick={this.update("gender")}/>
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" value="other" onClick={this.update("gender")}/>
                <label htmlFor="other">Other</label>
                <button onClick={this.prevStep}>{'<'}</button>
                <button onClick={this.nextStep}>{'>'}</button>
            </form>
        )
    }

    getLanguageAndRegion(){
        return (
            <form className="sign-up-form">
                {this.showErrors()}
                <label htmlFor="language">Language</label>
                <select id="language" onChange={this.update("language")}>
                    <option value="">--Select language--</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                </select>

                <label htmlFor="region">Region</label>
                <select id="region" onChange={this.update("region")}>
                    <option value="">--Select Region--</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </select>
                <button onClick={this.prevStep}>{'<'}</button>
                <button onClick={this.submitForm}>{'Submit'}</button>
            </form>
        )
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    submitForm(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        delete user["step"];
        const { processForm } = this.props;
        processForm(user);
    }

    render(){
        const {step} = this.state;
        const {email, password, age, username, first_name, last_name, gender, language, region} = this.state;
        const credVals = { email, password, age};
        const nameVals = { username, first_name, last_name};
        const gender = { gender };
        const langAndRegVals = { language, region };
        switch(step){
            case 1: //email, password, age
                return <Credentials update={this.update} nextStep={this.nextStep} values={values}/>;
            case 2: //username, first_name, last_name
                return this.getNames();
            case 3: //gender
                return this.getGender();
            case 4: //language, region
                return this.getLanguageAndRegion();
            // case 5: //signup
        }
    }
}

export default SignUpForm;