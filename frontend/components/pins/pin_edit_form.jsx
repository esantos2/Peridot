import React from 'react'
import { withRouter } from 'react-router-dom';

class EditPinForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.pin;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updatePin(this.state)
            .then( () => this.props.closeEditForm())
    }

    handleDelete(e){
        e.preventDefault();
        const {pin, currentUserId, deletePin, closeEditForm} = this.props;
        // delete from board
        if (currentUserId === pin.userId){
            closeEditForm();
            deletePin(pin.id);
            this.props.history.push(`/users/${currentUserId}/pins`);
        }
    }

    editDetails(){
        if (this.props.currentUserId !== this.props.pin.userId) return null;
        const {title, description, link} = this.state;
        return (
            <div className="edit-details">
                <div>
                    <p>Title</p>
                    <input type="text" value={title} onChange={this.update("title")}/>
                </div>
                <div>
                    <p>Description</p>
                    <textarea rows="3" value={description} onChange={this.update("description")}/>
                </div>
                <div>
                    <p>Website</p>
                    <input type="text" value={link} onChange={this.update("link")}/>
                </div>
            </div>
        )
    }

    render() {
        if (!this.props.pin) return null;
        return (
            <div className="modal-background" onClick={this.props.closeEditForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <h1>Edit this Pin</h1>
                    <div className="pin-edit-form-box">
                        <div className="edit-pin-board">
                            <div className="content">
                                <div className="board-selection">
                                    <div>
                                        <p>Board</p>
                                        <select >
                                            <option value="">--Select Board--</option>
                                            <option value="USA">USA</option>
                                            <option value="Canada">Canada</option>
                                            <option value="China">China</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Japan">Japan</option>
                                        </select>
                                        <div className="drop-down-arrow">
                                            <i className="fas fa-chevron-down"></i>
                                        </div>
                                    </div>
                                </div>
                                {this.editDetails()}
                            </div>
                            <div className="image">
                                <div className="profile-pic"></div>
                            </div>
                        </div>
                        <div className="bottom-options">
                            <div className="delete-button">
                                <button className="delete-pin" onClick={this.handleDelete}>Delete</button>
                            </div>
                            <div className="save-or-cancel">
                                <button className="cancel-edit" onClick={this.props.closeEditForm}>Cancel</button>
                                <button className="save-edit" onClick={this.handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(EditPinForm);