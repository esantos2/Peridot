import React from 'react';
import PinIndexItem from './pin_index_item';
import { NavLink } from 'react-router-dom';

class PinIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.getInfo()
    }

    addCreatePin(){
        if (this.props.createOption){
            return (
                <NavLink to="/pin-builder" className="create-pin-button">
                    <div className="image">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="title">Create Pin</div>
                </NavLink>
            )
        }
    }
    
    render(){
        if (this.props.pins.length === 0) return null;
        return (
            <div className="all-pins-box">
                {this.addCreatePin()}
                {(this.props.pins).map((pin, idx) => {
                    return <PinIndexItem key={idx} pin={pin}/>;
                })}
            </div>
        )
    }
}

export default PinIndex;