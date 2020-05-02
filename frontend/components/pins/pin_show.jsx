import React from 'react';

class PinShow extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {pin} = this.props
        return (
            <div className="pin-show-page">
                <div className="pin-show-box">
                    <div className="pin-image"></div>
                    <div className="pin-content">
                        <div className="pin-content">
                            <div className="save-to-board">
                            </div>
                            <h1>{pin.title}</h1>
                            <h3>{pin.description}</h3>
                            <p>{pin.link}</p>
                        </div>
                    </div>
                </div>
                <div className="related-pins">

                </div>
            </div>
        )
    }
}

export default PinShow;