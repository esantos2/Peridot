import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class Credentials extends React.Component {

    constructor(props){
        super(props)
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext(e){
        e.preventDefault();
        this.checkFields();
    }

    checkFields(){
        const { values } = this.props;
        let newErrors = [];
        Object.keys(values).forEach( val => {
            if (values[val] === ''){
                newErrors.push(`${val} can't be blank!`);
            }
        })
        this.props.addErrors(newErrors);
    }

    render(){
        const { values } = this.props;
        return (
            <div className="modal-background">
                <div className="side-button">
                    <Link to='/login'>Log in</Link>
                </div>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="login-form-box">
                        <div className="login-heading">
                            <div><i id="logo" className="fab fa-pinterest"></i></div>
                            <h1>Welcome to Peridot</h1>
                            <div className="prompt">Find new ideas to try</div>
                        </div>
                        <form className="login-form">
                            <div className="login-fields">
                                <input type='text' placeholder="Email" value={values.email} onChange={this.props.update("email")} />
                                <input type='password' placeholder="Create a password" value={values.password} onChange={this.props.update("password")} />
                                <input type='text' placeholder="Age" value={values.age} onChange={this.props.update("age")} />
                            </div>
                            <div className="error">
                                {this.props.showErrors()}
                            </div>
                            <div className="login-form-buttons">
                                <button className="login-button" onClick={this.handleNext} >Continue</button>
                            </div>
                        </form>
                        <div className="signup-link">
                            <Link to='/login'>Already a member? Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Credentials;