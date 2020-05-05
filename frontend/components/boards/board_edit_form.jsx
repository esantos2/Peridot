import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardEditForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
            .then(() => this.props.closeEditForm())
    }

    handleDelete(e) {
        e.preventDefault();
        const { board, deleteBoard, closeEditForm, currentUserId } = this.props;
        if (currentUserId === board.userId) {
            closeEditForm();
            deleteBoard(currentUserId, board.id);
            // this.props.history.push(`/users/${currentUserId}/boards`);
        }
    }

    render(){
        const {name, description} = this.state;
        const {closeEditForm} = this.props;
        return (
            <div className="modal-background" onClick={closeEditForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="board-edit-form">
                        <div className="form-header">
                            <h2>Edit your board</h2>
                            <div className="close-form" onClick={closeEditForm}>X</div>
                        </div>
                        <div>
                            <p>Name</p>
                            <input type="text" value={name} onChange={this.update("name")} />
                        </div>
                        <div>
                            <p>Description</p>
                            <textarea rows="3" placeholder="What's your board about?" value={description || ''} onChange={this.update("description")} />
                        </div>
                        <div>
                            <p>Add dates (optional - this can help you plan!)</p>
                            <div className="start-end-date">
                                <label>Start
                                    <input type="date" placeholder="Start date"/>
                                </label>
                                <label>End
                                    <input type="date" placeholder="End date"/>
                                </label>
                            </div>
                        </div>
                        <div className="bottom-options">
                            <div className="delete-button">
                                <button className="delete-pin" onClick={this.handleDelete}>Delete</button>
                            </div>
                            <div className="save-or-cancel">
                                <button className="cancel-edit" onClick={closeEditForm}>Cancel</button>
                                <button className="save-edit" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardEditForm);