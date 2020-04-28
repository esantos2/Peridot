import React from 'react'

class LanguageAndRegion extends React.Component {

    constructor(props) {
        super(props)
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handleNext.bind(this);
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
                <label htmlFor="language">Language</label>
                <select id="language" onChange={this.props.update("language")}>
                    <option value="">--Select language--</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                </select>

                <label htmlFor="region">Region</label>
                <select id="region" onChange={this.props.update("region")}>
                    <option value="">--Select Region--</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </select>
                <button onClick={this.handlePrev}>{'<'}</button>
                <button onClick={this.handleNext}>{'Submit'}</button>
            </form>
        )
    }
}

export default LanguageAndRegion;