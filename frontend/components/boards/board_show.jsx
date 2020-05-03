import React from 'react';
import PinIndex from '../pins/pin_index';

class BoardShow extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){
        this.props.fetchBoard();
    }

    render(){
        const {board, fetchBoard} = this.props;
        return (
            <div className="board-show-box">
                <div className="board-info">
                    <h2>Board show page</h2>
                    <h1>{board.name}</h1>
                    <h3>{board.description}</h3>
                </div>
                <div className="board-show-pins">
                    <PinIndex getInfo={fetchBoard} pins={board.pins} />
                </div>
            </div>
        )
    }
}

export default BoardShow;