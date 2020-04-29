import React from 'react';

class Success extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal-background">
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    <div className="login-form-box">
                        <h1>Success!</h1>
                        <form className="login-form">
                            <div className="login-form-buttons">
                                <button onClick={(e) => this.props.submitForm(e)}>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Success;