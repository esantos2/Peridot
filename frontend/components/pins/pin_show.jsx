import React from 'react';
import EditPinForm from './pin_edit_form';
import { withRouter, NavLink } from 'react-router-dom';
import PinIndex from './pin_index';
import { selectSuggestedPins } from '../../reducers/selectors';

class PinShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edit: false,
            chosenBoardId: ''
        }
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
        this.goBack = this.goBack.bind(this);
        this.getSuggested = this.getSuggested.bind(this);
        this.update = this.update.bind(this);
        this.handleSaveToBoard = this.handleSaveToBoard.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.makeBoardSelection = this.makeBoardSelection.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.openBoardForm = this.openBoardForm.bind(this);
        this.closeBoardForm = this.closeBoardForm.bind(this);
    }

    goBack(e){
        e.stopPropagation();
        this.props.history.goBack();
    }

    componentDidMount(){
        const { fetchPins, fetchUsers, fetchBoards, currentUserId} = this.props;
        fetchPins();
        fetchUsers();
        fetchBoards(currentUserId);
    }

    openEditForm(e){
        e.preventDefault();
        this.setState({edit: true});
    }

    closeEditForm(){
        this.setState({ edit: false });
    }

    getSuggested(){
        const {pins, currentUserId, chosenPinId} = this.props;
        let suggested = selectSuggestedPins(pins, currentUserId);
        delete suggested[chosenPinId+1];
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
                    closeEditForm={this.closeEditForm}
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
                <div className="drop-down select-board"
                    id="selected-text"
                    onClick={this.showMenu}>
                    Select board
                </div>
                <ul id="board-names"
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
                <div className="drop-down-arrow-select-board">
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
        document.getElementById("board-names").classList.toggle("show-menu")
    }

    selectBoard(e) {
        e.preventDefault();
        document.getElementById("board-names").classList.toggle("show-menu")
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
    //board end
    
    handleSaveToBoard(e){
        e.preventDefault();
        let boardPin = {
            board_id: parseInt(this.state.chosenBoardId),
            pin_id: parseInt(this.props.chosenPinId)
        }
        this.props.saveToBoard(boardPin);
    }
    
    update(field){
        return e => {
            this.setState({[field]: e.target.value})}
    }

    optionToEdit(){
        const { pins, chosenPinId, currentUserId } = this.props;
        if (pins[chosenPinId].userId === currentUserId){
            return (
                <div className="edit-pin" onClick={this.openEditForm}>
                    <i className="fas fa-pencil-alt"></i>
                </div>
            )
        }
    }

    render() {
        window.scrollTo(0,0);
        const { pins, chosenPinId, fetchPins, users} = this.props;
        if (!Object.values(pins).length) return null;
        let showPin = pins[chosenPinId];
        let owner = users[showPin.userId];
        if (!owner) return null;
        return (
            <div className="pin-show-page">
                {this.renderEditForm()}
                {this.showBoardForm()}
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
                                <button className="save-pin" onClick={this.handleSaveToBoard}>Save</button>
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