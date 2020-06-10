import React from 'react';
import PinIndexItem from './pin_index_item';
import { NavLink } from 'react-router-dom';
import { addMainSpinner } from '../../util/loading_spinner';

class PinIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            columns: 0,
            shuffle: false
        }
        this.reorganizePins = this.reorganizePins.bind(this);
    }

    componentDidMount(){
        let body = document.querySelector("body");
        body.style.height = "auto";
        body.style.overflow = "visible";
        this.props.getInfo();
        this.reorganizePins();
        window.addEventListener("resize", this.reorganizePins);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.reorganizePins);
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

    getNumCols(){
        let indexMargin = 160;
        let pinWidth = 244;
        return Math.floor((window.innerWidth - indexMargin) / pinWidth);
    }

    reorganizePins(){
        const numCols = this.getNumCols();
        if (numCols !== this.state.columns && numCols > 0){
            this.setState({ 
                columns: numCols,
                shuffle: true
            });
        }   
    }

    shufflePins(){
        const { pins } = this.props;
        const {columns, shuffle } = this.state;
        if (!shuffle) return [];

        //array of columns
        let pinCols = new Array(columns);
        for (let i = 0; i < pinCols.length; i++) {
            pinCols[i] = new Array(0);
        }

        //shuffle pins
        let shufflePins = pins;
        for (let i = shufflePins.length - 1; i > 0; i--) {
            const randIdx = Math.floor(Math.random() * (i + 1));
            [shufflePins[i], shufflePins[randIdx]] = [shufflePins[randIdx], shufflePins[i]];
        }

        //add pins to columns
        for (let i = 0; i < shufflePins.length; i++) {
            let col = i % columns;
            pinCols[col].push(shufflePins[i]);
        }

        return pinCols;
    }

    loadingScreen(){
        return (
            <div id="main-spinner" className="main-spinner-box">
                <div className="main-loading-spinner"></div>
                <h1 className="loading-message">We're adding new ideas to your home feed!</h1>
            </div>
        )
    }

    render(){
        const {pins} = this.props;
        const {columns, shuffle} = this.state;
        const masonryPins = this.shufflePins();
        if (!pins || pins.length === 0 || masonryPins.length === 0 || !columns) return null;
        const lastCol = masonryPins.length - 1;
        const lastRow = masonryPins[lastCol].length - 1;
        return (
            <div className="pin-index-box">
                {this.loadingScreen()}
                {shuffle ? addMainSpinner() : ""}
                <div className="all-pins-box">
                    {(masonryPins).map((pinCol, colNum) => {
                        return (
                            <div key={colNum} className="pin-column">
                                { (colNum === 0) ? this.addCreatePin() : ""}
                                {pinCol.map((pin, idx) => {
                                    const lastPin = colNum === lastCol && idx === lastRow;
                                    return <PinIndexItem key={idx} pin={pin} lastPin={lastPin} />;
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PinIndex;