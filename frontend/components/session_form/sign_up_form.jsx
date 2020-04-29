import React from 'react';
import Credentials from './sign_up_details/credentials';
import Names from './sign_up_details/names';
import Gender from './sign_up_details/gender';
import LanguageAndRegion from './sign_up_details/language_and_region';
import Success from './sign_up_details/success';

class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            step: 1,
            errors: [],
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
        this.addErrors = this.addErrors.bind(this);
        this.showErrors = this.showErrors.bind(this);
    }

    showErrors(){
        const {errors} = this.state;
        return (<ul>
            {errors.map((err, idx) => {
                return <li key={idx}>{err}</li>
            })}
        </ul>)
    }

    nextStep(){
        const {errors, step} = this.state;
        if (errors.length === 0){
            this.setState({ step: step + 1})
        }
    }

    prevStep(){
        const {step} = this.state;
        this.setState({ step: step - 1})
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    addErrors(arr){
        this.setState({errors: arr}, () => this.nextStep());
    }

    submitForm(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        delete user["step"];
        delete user["errors"];
        this.props.processForm(user);
    }

    render(){
        const {step, email, password, age, username, first_name, last_name, gender, language, region} = this.state;
        const credVals = { email, password, age};
        const nameVals = { username, first_name, last_name};
        const genVal = { gender };
        const langAndRegVals = { language, region };
        switch(step){
            case 1: //email, password, age
                return <Credentials 
                    update={this.update} 
                    nextStep={this.nextStep}
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={credVals}/>;
            case 2: //username, first_name, last_name
                return <Names 
                    update={this.update} 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep} 
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={nameVals}/>;
            case 3: //gender
                return <Gender 
                    update={this.update} 
                    nextStep={this.nextStep} 
                    prevStep={this.prevStep} 
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={genVal} />;
            case 4: //language, region
                return <LanguageAndRegion 
                    update={this.update} 
                    nextStep={this.submitForm} 
                    prevStep={this.prevStep} 
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={langAndRegVals} />;
            case 5: //signup
                return <Success 
                    submitForm={this.submitForm}/>;
        }
    }
}

export default SignUpForm;