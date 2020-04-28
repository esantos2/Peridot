import React from 'react'

class Names extends React.Component {

    constructor(props) {
        super(props)
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handleNext.bind(this);
    }

    handleNext(e) {
        e.preventDefault();
        //validate fields
        debugger
        this.props.nextStep();
    }

    handlePrev(e) {
        debugger
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <form className="sign-up-form" >
                <label>Username
                    <input type='text' value={values.username} onChange={this.props.update("username")} />
                </label>
                <label>First Name
                    <input type='text' value={values.first_name} onChange={this.props.update("first_name")} />
                </label>
                <label>Last Name
                    <input type='text' value={values.last_name} onChange={this.props.update("last_name")} />
                </label>
                <br></br>
                <button onClick={this.handlePrev}>{'<'}</button>
                <br></br>
                <button onClick={this.handleNext}>{'>'}</button>
            </form>
        )
    }
}

export default Names;