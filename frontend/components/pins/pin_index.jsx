import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchPins()
    }
    
    render(){
        if (!this.props.pins) return null;
        return (
            <div className="all-pins-box">
                {Object.values(this.props.pins).map((pin, idx) => {
                    return (
                        <PinIndexItem key={idx} pin={pin} fetchPin={this.props.fetchPin} />
                    )
                })}
            </div>
        )
    }
}

export default PinIndex;