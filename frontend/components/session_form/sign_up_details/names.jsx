import React from 'react'

class Names extends React.Component {

    constructor(props) {
        super(props)
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext(e) {
        e.preventDefault();
        this.checkFields();
    }

    handlePrev(e) {
        e.preventDefault();
        this.props.prevStep();
    }

    checkFields() {
        const { values } = this.props;
        let newErrors = [];
        Object.keys(values).forEach(val => {
            if (values[val] === '') {
                newErrors.push(`${val} can't be blank!`);
            }
        })
        this.props.addErrors(newErrors);
    }

    render() {
        const { values } = this.props;
        return (
            <form className="sign-up-form" >
                {this.props.showErrors()}
                <label>Username
                    <input type='text' value={values.username} onChange={this.props.update("username")} />
                </label>
                <label>First Name
                    <input type='text' value={values.first_name} onChange={this.props.update("first_name")} />
                </label>
                <label>Last Name
                    <input type='text' value={values.last_name} onChange={this.props.update("last_name")} />
                </label>
                <button onClick={this.handlePrev}>{'<'}</button>
                <button onClick={this.handleNext}>{'>'}</button>
            </form>
        )
    }
}

export default Names;