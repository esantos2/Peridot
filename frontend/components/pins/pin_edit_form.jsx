import React from 'react'
import { withRouter, NavLink } from 'react-router-dom';

class EditPinForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props.pin;
        const { title, description, link } = this.props.pin
        this.state = {
            title,
            description,
            link,
            chosenBoardId: '',
            confirm: false
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        const { title, description, link, chosenBoardId } = this.state;
        const { pin, currentUserId } = this.props;
        if (pin.user_id === currentUserId){
            let newUser = { 
                id: pin.id,
                user_id: currentUserId, 
                title, 
                description, 
                link };
            this.props.updatePin(newUser)
                .then(pin => this.props.saveToBoard({ board_id: parseInt(chosenBoardId), pin_id: pin.pin.id }));
        } else {
            this.props.saveToBoard({ board_id: parseInt(chosenBoardId), pin_id: pin.id });
        }
        this.props.closeEditForm();
    }

    handleDelete(e){
        e.preventDefault();
        const {pin, currentUserId, deletePin, closeEditForm} = this.props;
        if (currentUserId === pin.userId){
            closeEditForm();
            deletePin(pin.id);
            this.props.history.push(`/users/${currentUserId}/pins`);
        }
    }

    // displayConfirmation() {
    //     const { currentUserId, pin} = this.props;
    //     if (this.state.confirm) {
    //         return (
    //             <div className="modal-background">
    //                 <div className="modal-child" onClick={e => e.stopPropagation()}>
    //                     <div className="pin-confirmation-box">
    //                         <div className="confirm-image"></div>
    //                         <h1>Success</h1>
    //                         <p><NavLink to={`/users/${currentUserId}/pins/${pin.id}`}>Continue</NavLink></p>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    editDetails(){
        if (this.props.currentUserId !== this.props.pin.userId) return null;
        const {title, description, link} = this.state;
        return (
            <div className="edit-details">
                {/* {this.displayConfirmation()} */}
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

    boardNames() {
        const { boards } = this.props;
        if (!boards) return null;
        return (
            <div>
                <select id="board-names" className="board-names" onChange={this.update("chosenBoardId")}>
                    <option value="">--Select board--</option>
                    {boards.map((board, idx) => {
                        return (
                            <option key={idx} value={board.id}>{board.name}</option>
                        )
                    })}
                </select>
                <div className="drop-down-arrow">
                    <i className="fas fa-chevron-down"></i>
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
                                        {this.boardNames()}
                                    </div>
                                </div>
                                {this.editDetails()}
                            </div>
                            <div className="pin-image-show">
                                <img className="thumbnail" src={this.props.pin.photoUrl} />
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