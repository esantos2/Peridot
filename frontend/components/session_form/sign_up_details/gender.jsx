import React from 'react'

class Gender extends React.Component{

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
        return (
            <div className="login-form-box">
                <h1>How do you identify?</h1>
                <form className="login-form">
                    {this.props.showErrors()}
                    <div className="radio-fields">
                        <div>
                            <input type="radio" id="male" value="male" onClick={this.props.update("gender")} />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div>
                            <input type="radio" id="female" value="female" onClick={this.props.update("gender")} />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input type="radio" id="other" value="other" onClick={this.props.update("gender")} />
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className="signup-form-buttons">
                        <button onClick={this.handlePrev}>{'<'}</button>
                        <button onClick={this.handleNext}>{'>'}</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Gender;