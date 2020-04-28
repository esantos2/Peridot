import React from 'react';

class Success extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <form>
                <h1>Now Signed up!</h1>
                <button onClick={(e) => this.props.submitForm(e)}>Continue</button>
            </form>
        )
    }
}

export default Success;