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
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="login-form-box">
                        <h1>What's your name?</h1>
                        <form className="login-form">
                            {this.props.showErrors()}
                            <div className="login-fields">
                                <input type='text' placeholder="Username" value={values.username} onChange={this.props.update("username")} />
                                <input type='text' placeholder="First name" value={values.first_name} onChange={this.props.update("first_name")} />
                                <input type='text' placeholder="Last name" value={values.last_name} onChange={this.props.update("last_name")} />
                            </div>
                            <div className="signup-form-buttons">
                                <button onClick={this.handlePrev}>{'<'}</button>
                                <button onClick={this.handleNext}>{'>'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Names;