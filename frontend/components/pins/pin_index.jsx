import React from 'react';
import PinIndexItem from './pin_index_item';
import { NavLink } from 'react-router-dom';

class PinIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let body = document.querySelector("body");
        body.style.height = "auto";
        body.style.overflow = "visible";
        this.props.getInfo();
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

    organizePins(){
        const {pins} = this.props;
        let indexMargin = 160;
        let pinWidth = 244;
        let numCols = Math.floor(( window.innerWidth - indexMargin) / pinWidth );

        let pinCols = new Array(numCols);
        for (let i = 0; i < pinCols.length; i++){
            pinCols[i] = new Array(0);
        }

        let shufflePins = pins;
        for(let i = shufflePins.length - 1; i > 0; i--){
            const randIdx = Math.floor( Math.random() * (i + 1));
            [ shufflePins[i], shufflePins[randIdx] ] = [ shufflePins[randIdx], shufflePins[i] ];
        }

        for (let i = 0; i < shufflePins.length; i++){
            let col = i % numCols;
            pinCols[col].push(shufflePins[i]);
        }

        return pinCols;
    }

    render(){
        const {pins} = this.props;
        if (!pins || pins.length === 0) return null;
        const masonryPins = this.organizePins();
        return (
            <div className="all-pins-box">
                {this.addCreatePin()}
                {(!pins) ?  "" :
                (masonryPins).map((pinCol, colNum) => {
                    return (
                        <div key={colNum} className="pin-column">
                            {pinCol.map((pin, idx) => {
                                return <PinIndexItem key={idx} pin={pin} />;
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PinIndex;