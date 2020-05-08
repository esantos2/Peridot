import React from 'react'
import { withRouter, NavLink } from 'react-router-dom';
import CreateBoardForm from '../boards/board_create_form';

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
            confirm: false,
            boardForm: false
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.makeBoardSelection = this.makeBoardSelection.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.openBoardForm = this.openBoardForm.bind(this);
        this.closeBoardForm = this.closeBoardForm.bind(this);
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value});
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
                currentUserId={currentUserId}
            />)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const { title, description, link, chosenBoardId } = this.state;
        const { pin, currentUserId } = this.props;
        if (pin.userId === currentUserId){
            let newUser = { 
                id: pin.id,
                user_id: currentUserId, 
                title, 
                description, 
                link };
            this.props.updatePin(newUser)
                .then(pin => {
                    
                    if (chosenBoardId){
                        return this.props.saveToBoard({ board_id: parseInt(chosenBoardId), pin_id: pin.pin.id })
                    }
                });
        } else {
            if (chosenBoardId){
                this.props.saveToBoard({ board_id: parseInt(chosenBoardId), pin_id: pin.id });
            }
        }
        this.setState({ confirm: true }, this.props.closeEditForm);
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

    displayConfirmation() {
        if (this.state.confirm) {
            return (
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className="pin-confirmation-box">
                            <div className="confirm-image"><i className="far fa-check-circle"></i></div>
                            <h1>Success!</h1>
                            <p><NavLink className="continue" to={`/users/${this.state.user_id}/pins`}>Continue</NavLink></p>
                        </div>
                    </div>
                </div>
            )
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

    boardNames() {
        const { boards } = this.props;
        if (!boards) return null;
        return (
            <div>
                <div className="drop-down select-board edit"
                    id="selected-text"
                    onClick={this.showMenu}>
                    Select board
                </div>
                <ul id="board-names-edit"
                    className="drop-down-menu">
                    {boards.map((board, idx) => {
                        return (
                            <li key={idx}
                                value={board.id}
                                className="board-name"
                                onClick={this.makeBoardSelection}
                            >{board.name}</li>
                        )
                    })}
                    <a onClick={this.openBoardForm}><li key="a"
                        className="create-board-option">
                        <i className="fas fa-plus-circle"></i>
                        Create board</li></a>
                </ul>
                <div className="drop-down-arrow-select-board-edit">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }

    makeBoardSelection(e) {
        document.getElementById("selected-text").innerHTML = e.currentTarget.innerHTML;
        this.selectBoard(e);
        this.update("chosenBoardId")(e);
    }

    showMenu() {
        document.getElementById("board-names-edit").classList.toggle("show-menu")
    }

    selectBoard(e) {
        e.preventDefault();
        document.getElementById("board-names-edit").classList.toggle("show-menu")
    }

    render() {
        if (!this.props.pin) return null;
        return (
            <div className="modal-background" onClick={this.props.closeEditForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    {this.showBoardForm()}
                    {this.displayConfirmation()}
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