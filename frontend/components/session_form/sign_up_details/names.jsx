import React from 'react';
import {Link} from 'react-router-dom';

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
                newErrors.push(`${val[0].toUpperCase().concat(val.slice(1))} can't be blank!`);
            }
        });
        this.props.addErrors(newErrors);
    }

    render() {
        const { values } = this.props;
        return (
            <div className="modal-background">
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="user-details-form-box">
                        <div className="email-pic">
                            <i className="email-pic-icon fas fa-user"></i>
                            <div>{values.email}</div>
                        </div>
                        <h1>Welcome to Peridot</h1>
                        <form className="login-form">
                            <div className="login-fields">
                                <input type='text' placeholder="Username" value={values.username} onChange={this.props.update("username")} />
                            </div>
                            <div className="error">
                                {this.props.showErrors()}
                            </div>
                            <div className="intro">
                                <p>Finish setting up your profile to save ideas,</p>
                                <p>get personalized recommendations and more</p>
                            </div>
                            <div className="login-form-buttons">
                                <button className="next login-button button" onClick={this.handleNext} >Next</button>
                            </div>
                        </form>
                        <div className="signup-link">
                            <Link to='/login'>
                                <div className="intro">
                                    <p>Already have a Peridot account?</p>
                                    <p className="intro-link">Log in instead</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Names;