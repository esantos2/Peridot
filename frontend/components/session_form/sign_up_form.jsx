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
        this.prevStep = this.prevStep.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.update = this.update.bind(this);
        
        this.addErrors = this.addErrors.bind(this);
        this.showErrors = this.showErrors.bind(this);
        this.goForward = this.goForward.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    addErrors(arr) {
        this.setState({ errors: arr }, () => this.nextStep());
    }

    nextStep(){
        const {step, email, password, age} = this.state;
        if (step === 1) {
            let newUser = {email, password, age};
            this.props.createNewUser(newUser)
                .then(this.props.clearErrors)
                .then(this.goForward);
        } else{
            this.goForward();
        }
    }

    goForward(){
        const {errors, step} = this.state;
        if (errors.length === 0 && this.props.errors.length === 0) {
            this.setState({ step: step + 1 })
        }
    }

    prevStep(){
        const {step} = this.state;
        this.setState({ step: step - 1, errors: []})
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        }
    }

    submitForm(e){
        e.preventDefault();
        const {username, first_name, last_name, gender, language, region} = this.state;
        let user = {username, first_name, last_name, gender, language, region};
        this.props.updateDetails(user);
    }

    showErrors() {
        let errors = (this.state.step === 1) ? this.props.errors : this.state.errors;
        let error = errors.length > 0 ? errors[0] : "";
        return error;
    }

    render(){
        const {step, email, password, age, username, first_name, last_name, gender, language, region} = this.state;
        const credVals = { email, password, age};
        const nameVals = { email, username, first_name, last_name};
        const genVal = { gender };
        const langAndRegVals = { language, region };
        switch(step){
            case 1: //email, password, age
                return <Credentials 
                    update={this.update}
                    newUserDetails={this.props.newUserDetails}
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    submitForm={this.submitForm}
                    values={credVals}/>;
            case 2: //username, first_name, last_name
                return <Names 
                    update={this.update} 
                    prevStep={this.prevStep} 
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={nameVals}/>;
            case 3: //gender
                return <Gender 
                    update={this.update} 
                    prevStep={this.prevStep} 
                    addErrors={this.addErrors}
                    showErrors={this.showErrors}
                    values={genVal} />;
            case 4: //language, region
                return <LanguageAndRegion 
                    update={this.update} 
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