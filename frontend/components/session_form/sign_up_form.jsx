import React from 'react';
import Credentials from './sign_up_details/credentials';
import Names from './sign_up_details/names';
import Gender from './sign_up_details/gender';
import LanguageAndRegion from './sign_up_details/language_and_region';

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
        this.validateInput = this.validateInput.bind(this);
    }

    showErrors(){
        const {errors} = this.state;
        return (<ul>
            {errors.map((err, idx) => {
                return <li key={idx}>{err}</li>
            })}
        </ul>)
    }

    errorsPresent(){
        const { errors } = this.state;
        return errors !== []
    }

    validateInput(field){
        if (this.state[field] === ''){
            this.setState({ errors: this.state.errors.concat([ `${field} can't be blank!`])})
        }
    }

    nextStep(){
        if (this.errorsPresent()){
            this.setState({errors: errors})
        }
        const {step} = this.state;
        this.setState({ step: step + 1})
    }

    prevStep(){
        const {step} = this.state;
        this.setState({ step: step - 1})
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

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
        const genVal = { gender };
        const langAndRegVals = { language, region };
        switch(step){
            case 1: //email, password, age
                return <Credentials update={this.update} nextStep={this.nextStep} values={credVals}/>;
            case 2: //username, first_name, last_name
                return <Names update={this.update} nextStep={this.nextStep} prevStep={this.prevStep} values={nameVals}/>;
            case 3: //gender
                return <Gender update={this.update} nextStep={this.nextStep} prevStep={this.prevStep} values={genVal} />;
            case 4: //language, region
                return <LanguageAndRegion update={this.update} nextStep={this.submitForm} prevStep={this.prevStep} values={langAndRegVals} />;
            // case 5: //signup
        }
    }
}

export default SignUpForm;