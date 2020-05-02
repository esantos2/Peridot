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
                {(this.props.pins).map((pin, idx) => {
                    return <PinIndexItem key={idx} pin={pin}/>;
                })}
            </div>
        )
    }
}

export default PinIndex;