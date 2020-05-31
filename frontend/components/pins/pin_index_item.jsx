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
        window.scrollTo(0, 0);
    }

    render(){
        const {pin} = this.props;
        return (
            <div className="pin-box" onClick={this.showPinDetails}>
                <div className="pin-box-details">
                    <div className="hover-details">
                            
                    </div>
                    <div className="pin-image">
                        <img className="thumbnail" src={pin.photoUrl} />
                    </div>
                </div>
                <div className="pin-space"></div>
            </div>
        )
    }
}

export default withRouter(PinIndexItem);