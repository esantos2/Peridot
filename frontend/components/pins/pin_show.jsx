import React from 'react';
import EditPinForm from './pin_edit_form';
import { withRouter, NavLink } from 'react-router-dom';
import PinIndex from './pin_index';
import CreateBoardForm from '../boards/board_create_form'
import { selectSuggestedPins } from '../../reducers/selectors';

class PinShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edit: false,
            chosenBoardId: '', 
            confirm: false
        }
        this.toggleEditForm = this.toggleEditForm.bind(this);
        this.toggleBoardForm = this.toggleBoardForm.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.goBack = this.goBack.bind(this);
        this.getSuggested = this.getSuggested.bind(this);
        this.update = this.update.bind(this);
        this.handleSaveToBoard = this.handleSaveToBoard.bind(this);
        this.makeBoardSelection = this.makeBoardSelection.bind(this);
        this.closeConfirm = this.closeConfirm.bind(this);
    }

    goBack(e){
        e.stopPropagation();
        this.props.history.goBack();
    }

    componentDidMount(){
        const { fetchPins, fetchUsers, fetchBoards, currentUserId} = this.props;
        window.addEventListener("click", this.toggleMenu);
        fetchPins();
        fetchUsers();
        fetchBoards(currentUserId);
    }

    componentWillUnmount(){
        window.removeEventListener("click", this.toggleMenu);
    }

    toggleEditForm(e){
        e.preventDefault();
        e.stopPropagation();
        let status = this.state.edit;
        this.setState({edit: !status});
    }

    getSuggested(){
        const {pins, currentUserId, chosenPinId} = this.props;
        let suggested = selectSuggestedPins(pins, currentUserId, chosenPinId);
        // delete suggested[chosenPinId+1];
        return suggested;
    }

    renderEditForm(){
        if (this.state.edit){
            const {pins, boards, chosenPinId, createBoard, errors, clearErrors, currentUserId, updatePin, deletePin, saveToBoard} = this.props;
            return (
                <EditPinForm 
                    pin={pins[chosenPinId]}
                    boards={boards}
                    errors={errors}
                    currentUserId={currentUserId}
                    updatePin={updatePin}
                    deletePin={deletePin}
                    saveToBoard={saveToBoard}
                    closeEditForm={this.toggleEditForm}
                    clearErrors={clearErrors}
                    createBoard={createBoard}
                />)
        }
    }

    //board start
    boardNames() {
        const { boards } = this.props;
        if (!boards) return null;
        return (
            <div>
                <div className="drop-down select-board show-select"
                    id="selected-text">
                    Select board
                </div>
                <div id="board-names" className="menu-box"> 
                    <ul className="drop-down-menu" onClick={e => e.stopPropagation()}>
                        {boards.map((board, idx) => {
                            return (
                                <li key={idx}
                                    value={board.id}
                                    className="board-name"
                                    onClick={this.makeBoardSelection}
                                >{board.name}</li>
                            )
                        })}
                        <a onClick={this.toggleBoardForm}>
                            <li key="a"
                                className="create-board-option">
                                <i className="fas fa-plus-circle"></i>
                                Create board
                            </li>
                        </a>
                    </ul>    
                </div> 
                <div className="drop-down-arrow-select-board">
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        )
    }

    makeBoardSelection(e) {
        document.getElementById("selected-text").innerHTML = e.currentTarget.innerHTML;
        this.toggleMenu(e);
        this.update("chosenBoardId")(e);
    }

    toggleMenu(e) {
        e.stopPropagation();
        let menuBox = document.getElementById("selected-text");
        let list = document.getElementById("board-names");
        if (!menuBox) return null;
        if (e.target === menuBox && !list.classList.contains("show-menu")){
            list.classList.add("show-menu");
        } else{
            list.classList.remove("show-menu");
        }
    }

    toggleBoardForm() {
        let status = this.state.boardForm;
        this.setState({ boardForm: !status });
    }

    showBoardForm() {
        if (this.state.boardForm) {
            const { createBoard, clearErrors, currentUserId } = this.props;
            return (<CreateBoardForm
                createBoard={createBoard}
                clearErrors={clearErrors}
                closeBoardForm={this.toggleBoardForm}
                currentUserId={currentUserId}
            />)
        }
    }
    
    handleSaveToBoard(e){
        e.preventDefault();
        let boardPin = {
            board_id: parseInt(this.state.chosenBoardId),
            pin_id: parseInt(this.props.chosenPinId)
        }
        this.props.saveToBoard(boardPin);
        this.setState({confirm: true, chosenBoardId: ""}, this.toggleButtonLock());
    }
    //board end

    closeConfirm(e){
        this.setState({confirm: false})
    }
    
    displayConfirmation() {
        if (this.state.confirm) {
            return (
                <div className="modal-child-round-box saved" onClick={this.closeConfirm}>
                    <div className="pin-confirmation-box">
                        <h1>{`Saved!`}</h1>
                        <i className="far fa-times-circle"></i>
                    </div>
                </div>
            )
        }
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})
            this.toggleButtonLock();
        }
    }

    toggleButtonLock() {
        const {chosenBoardId} = this.state;
        const saveBtn = document.getElementById("save-pin");
        if (!saveBtn) return;
        if (!chosenBoardId) { //lock button
            saveBtn.disabled = true;
            saveBtn.classList.add("no-button");
        } else { //unlock
            saveBtn.disabled = false;
            saveBtn.classList.remove("no-button");
        }
    }

    optionToEdit(){
        const { pins, chosenPinId, currentUserId } = this.props;
        if (pins[chosenPinId].userId === currentUserId){
            return (
                <div className="edit-pin" onClick={this.toggleEditForm}>
                    <i className="fas fa-pencil-alt"></i>
                </div>
            )
        }
    }

    render() {
        const { pins, chosenPinId, fetchPins, users} = this.props;
        if (!Object.values(pins).length) return null;
        let showPin = pins[chosenPinId];
        let owner = users[showPin.userId];
        if (!owner) return null;
        this.toggleButtonLock();
        return (
            <div className="pin-show-page">
                {this.renderEditForm()}
                {this.showBoardForm()}
                {this.displayConfirmation()}
                <div className="back-button" onClick={this.goBack}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="pin-show-box">
                    <div className="pin-image-show partition">
                        <img className="thumbnail" src={showPin.photoUrl} />
                    </div>
                    <div className="pin-content">
                        <div className="pin-options">
                            <div className="pin-buttons">
                                {this.optionToEdit()}
                            </div>
                            <div className="pin-top-buttons">
                                <button id="save-pin" className="save-pin" onClick={this.handleSaveToBoard}>Save</button>
                                {this.boardNames()}
                            </div>
                        </div>
                        <a href={showPin.link} target="_blank">{showPin.link}</a>
                        <h1>{showPin.title}</h1>
                        <NavLink className="pin-owner" to={`/users/${owner.id}/pins`}>
                            <i className="fas fa-user-circle"></i>
                            <p>{`${owner.firstName} ${owner.lastName}`}</p>
                        </NavLink>
                        <p>{showPin.description}</p>
                    </div>
                </div>
                <div className="related-pins">
                    <h1>More like this</h1>
                    <PinIndex pins={this.getSuggested()} getInfo={fetchPins}/>
                </div>
            </div>
        )
    }
}

export default withRouter(PinShow);