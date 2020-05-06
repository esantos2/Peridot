import React from 'react';
import PinIndex from '../pins/pin_index';

class BoardShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {fetchPins, fetchBoard, fetchBoardPins} = this.props;
        fetchPins();
        fetchBoardPins();
        fetchBoard();
    }

    render(){
        const {board, pins, fetchBoard} = this.props;
        if (!board) return null;
        return (
            <div className="board-show-box">
                <div className="board-info">
                    <h1>{board.name}</h1>
                    <h3>{board.description}</h3>
                </div>
                <div className="board-show-pins">
                    { !pins[0] ? "" : 
                        <PinIndex getInfo={fetchBoard} pins={pins} />
                    }
                </div>
            </div>
        )
    }
}

export default BoardShow;