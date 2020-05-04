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
        const {boards, updateBoard, deleteBoard, currentUserId} = this.props;
        return (
            <div className="board-index-box">
                {boards.map((board, idx) => {
                    return <BoardIndexItem 
                        key={idx} 
                        currentUserId={currentUserId}
                        board={board}
                        updateBoard={updateBoard}
                        deleteBoard={deleteBoard}
                    />
                })}
            </div>
        )
    }
}

export default BoardIndex;