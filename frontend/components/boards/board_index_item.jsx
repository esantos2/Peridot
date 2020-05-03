import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {board} = this.props;
        return (
            <div className="board-index-item">
                <h2>{board.name}</h2>
                <p>{board.description}</p>
                <Link to={`/users/${board.userId}/boards/${board.id}`}>Show details</Link>
            </div>
        )
    }
}

export default BoardIndexItem;