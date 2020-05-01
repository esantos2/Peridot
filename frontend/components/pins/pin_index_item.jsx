import React from 'react';

class PinIndexItem extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {pin, fetchPin} = this.props;
        return (
            <div className="pin-box">
                <h3>This is a pin lol</h3>
                <h1>{pin.title}</h1>
                <p>{pin.description}</p>
                <h5>{pin.link}</h5>
            </div>
        )
    }
}

export default PinIndexItem;