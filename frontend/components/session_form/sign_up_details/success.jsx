import React from 'react';

class Success extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="login-form-box">
                <h1>Success!</h1>
                <form className="login-form">
                    <div className="login-form-buttons">
                        <button onClick={(e) => this.props.submitForm(e)}>Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Success;