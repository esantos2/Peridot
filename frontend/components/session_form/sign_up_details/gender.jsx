import React from 'react'

class Gender extends React.Component{

    constructor(props) {
        super(props)
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }

    handleNext(e) {
        e.preventDefault();
        //validate fields
        this.props.nextStep();
    }

    handlePrev(e) {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <form className="sign-up-form">
                <p>Gender</p>
                <input type="radio" id="male" value="male" onClick={this.props.update("gender")} />
                <label htmlFor="male">Male</label>
                <input type="radio" id="female" value="female" onClick={this.props.update("gender")} />
                <label htmlFor="female">Female</label>
                <input type="radio" id="other" value="other" onClick={this.props.update("gender")} />
                <label htmlFor="other">Other</label>
                <button onClick={this.handlePrev}>{'<'}</button>
                <button onClick={this.handleNext}>{'>'}</button>
            </form>
        )
    }
}

export default Gender;