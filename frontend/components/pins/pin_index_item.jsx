import React from 'react';
import { withRouter } from 'react-router-dom';

class PinIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.showPinDetails = this.showPinDetails.bind(this);
    }

    showPinDetails(){
        const pinId = this.props.pin.id;
        this.props.history.push(`/pins/${pinId}`);
    }

    render(){
        const {pin} = this.props;
        return (
            <div className="pin-box" onClick={this.showPinDetails}>
                <div className="pin-box-details">
                    <div className="hover-details">
                            
                    </div>
                    <h3>This is a pin lol</h3>
                    <h1>{pin.title}</h1>
                    <p>{pin.description}</p>
                    <h5>{pin.link}</h5>
                </div>
                <div className="pin-space"></div>
            </div>
        )
    }
}

export default withRouter(PinIndexItem);