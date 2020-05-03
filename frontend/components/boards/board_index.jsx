import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBoards();
    }

    render(){
        const {boards} = this.props;
        return (
            <div className="board-index-box">
                {boards.map((board, idx) => {
                    return <BoardIndexItem key={idx} board={board} />
                })}
            </div>
        )
    }
}

export default BoardIndex;