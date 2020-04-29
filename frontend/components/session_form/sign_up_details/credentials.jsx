import React from 'react';
import { Link } from 'react-router-dom';

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
                        <div><i id="logo" className="fab fa-pinterest"></i></div>
                        <h1>Welcome to Peridot</h1>
                        <div>Find new ideas to try</div>
                        <form className="login-form">
                            {this.props.showErrors()}
                            <div className="login-fields">
                                <input type='text' placeholder="Email" value={values.email} onChange={this.props.update("email")} />
                                <input type='password' placeholder="Create a password" value={values.password} onChange={this.props.update("password")} />
                                <input type='text' placeholder="Age" value={values.age} onChange={this.props.update("age")} />
                            </div>
                            <div className="signup-form-buttons next-only">
                                <button onClick={this.handleNext}>{'>'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Credentials;