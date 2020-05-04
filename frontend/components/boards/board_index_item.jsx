import React from 'react';
import { Link } from 'react-router-dom';
import BoardEditForm from './board_edit_form';

class BoardIndexItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            edit: false
        }
        this.openForm = this.openForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    openForm(e){
        e.preventDefault();
        this.setState({edit: true});
    }

    showEditForm(){
        if (this.state.edit){
            const {board, updateBoard, deleteBoard, currentUserId} = this.props;
            return <BoardEditForm 
                board={board}
                currentUserId={currentUserId}
                updateBoard={updateBoard}
                deleteBoard={deleteBoard}
                closeEditForm={this.closeEditForm}
            />;
        }
    }

    closeEditForm() {
        this.setState({ edit: false });
    }

    render(){
        const {board} = this.props;
        return (
            <div className="board-index-item">
                {this.showEditForm()}
                <h2>{board.name}</h2>
                <p>{board.description}</p>
                <Link to={`/users/${board.userId}/boards/${board.id}`}>Show details</Link>
                <button className="board-edit-button" onClick={this.openForm}>Edit board</button>
            </div>
        )
    }
}

export default BoardIndexItem;