import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {board} = this.props;
        return (
            <div>
                <h2>{board.name}</h2>
                <h2>{board.description}</h2>
                <Link to={`/users/${board.userId}/boards/${board.id}`}>Show details</Link>
            </div>
        )
    }
}

export default BoardIndexItem;