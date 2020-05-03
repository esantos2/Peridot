import React from 'react'

class LanguageAndRegion extends React.Component {

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
            <div className="modal-background">
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="user-details-form-box">
                        <form className="login-form">
                            <h1 className="form-title">Pick your language and country/region</h1>
                            <div className="dropdown-fields">
                                <div>
                                    <select id="language" onChange={this.props.update("language")}>
                                        <option value="">--Select language--</option>
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="region" onChange={this.props.update("region")}>
                                        <option value="">--Select Region--</option>
                                        <option value="USA">USA</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                            </div>
                            <div className="error">
                                {this.props.showErrors()}
                            </div>
                            {/* <div className="signup-form-buttons">
                                <button onClick={this.handlePrev}>{'<'}</button>
                                <button onClick={this.handleNext}>{'>'}</button>
                            </div> */}
                        </form>
                        <div className="login-form-buttons">
                            <button className="next login-button button" onClick={this.handleNext} >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanguageAndRegion;