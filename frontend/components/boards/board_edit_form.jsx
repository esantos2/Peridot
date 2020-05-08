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
                    <div className="board-form-box">
                        <h1>Edit your board</h1>
                        <div className="close-form" onClick={closeEditForm}>

                        </div>
                        <div className="edit-details">
                            <div>
                                <p>Name</p>
                                <input type="text" value={name} onChange={this.update("name")} />
                            </div>
                            <div>
                                <p>Description</p>
                                <textarea rows="3" placeholder="What's your board about?" value={description || ''} onChange={this.update("description")} />
                            </div>
                            <div>
                                <p>Visibility (optional)</p>
                                <div className="checkbox">
                                    <input type="checkbox"></input>
                                    <label>Keep this board secret.</label>
                                </div>
                            </div>
                            <div>
                                <p>Add dates (optional)</p>
                                <div className="start-end-date">
                                    <label>Start</label>
                                    <input type="date" placeholder="Start date"/>
                                    <label>End</label>
                                    <input type="date" placeholder="End date"/>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-options">
                            <div className="save-or-cancel">
                                <button className="cancel-edit" onClick={closeEditForm}>Cancel</button>
                                <button className="save-edit" onClick={this.handleSubmit}>Save</button>
                            </div>
                            <div className="delete-button">
                                <button className="delete-pin" onClick={this.handleDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardEditForm);