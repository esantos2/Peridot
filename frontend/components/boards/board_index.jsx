import React from 'react';
import BoardIndexItem from './board_index_item';
import { withRouter } from 'react-router-dom';
import CreateBoardForm from '../boards/board_create_form';

class BoardIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boardForm: false
        }
        this.openBoardForm = this.openBoardForm.bind(this);
        this.closeBoardForm = this.closeBoardForm.bind(this);
        this.showBoardForm = this.showBoardForm.bind(this);
    }

    componentDidMount(){
        this.props.fetchBoards();
    }

    openBoardForm() {
        this.setState({ boardForm: true });
    }

    closeBoardForm() {
        this.setState({ boardForm: false });
    }

    showBoardForm() {
        if (this.state.boardForm) {
            const { createBoard, clearErrors, currentUserId } = this.props;
            return (<CreateBoardForm
                createBoard={createBoard}
                clearErrors={clearErrors}
                closeBoardForm={this.closeBoardForm}
                currentUserId={currentUserId.id}
            />)
        }
    }

    addCreateBoard() {
        const {currentUserId, match} = this.props;
        if (parseInt(match.params.userId) === currentUserId) {
            return (
                <div className="create-pin-button" onClick={this.openBoardForm}>
                    <div className="image">
                        <i className="fas fa-plus-circle"></i>
                    </div>
                    <div className="title">Create Board</div>
                </div>
            )
        }
    }

    render(){
        const {boards, updateBoard, deleteBoard, currentUserId} = this.props;
        return (
            <div className="board-index-box">
                {this.showBoardForm()}
                {this.addCreateBoard()}
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

export default withRouter(BoardIndex);