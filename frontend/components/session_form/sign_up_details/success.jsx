import React from 'react';

class Success extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal-background">
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="user-details-form-box">
                        <form className="final-login-form">
                            <h1>Success!</h1>
                            <div className="login-form-buttons">
                                <button className="next login-button" onClick={(e) => this.props.submitForm(e)}>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success;