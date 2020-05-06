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
            chosenBoard: ''
        }
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
        this.goBack = this.goBack.bind(this);
        this.getSuggested = this.getSuggested.bind(this);
        this.update = this.update.bind(this);
        this.handleSaveToBoard = this.handleSaveToBoard.bind(this);
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
            const {pins, boards, chosenPinId, errors, currentUserId, updatePin, deletePin, saveToBoard} = this.props;
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
                />)
        }
    }

    boardNames() {
        const { boards } = this.props;
        return (
            <div className="board-name-list" onChange={this.update("chosenBoard")}>
                <select>
                    <option value="">--Select board--</option>
                    {boards.map((board, idx) => {
                        return (
                            <option key={idx} value={board.id}>{board.name}</option>
                        )
                    })}
                </select>
                <button onClick={this.handleSaveToBoard}>Save</button>
            </div>
        )
    }

    update(field){
        return e => {
            this.setState({[field]: e.target.value})}
    }

    handleSaveToBoard(e){
        e.preventDefault();
        let boardPin = {
            board_id: parseInt(this.state.chosenBoard),
            pin_id: parseInt(this.props.chosenPinId)
        }
        this.props.saveToBoard(boardPin);
    }

    optionToEdit(){
        const { pins, chosenPinId, currentUserId } = this.props;
        if (pins[chosenPinId].user_id === currentUserId){
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
        return (
            <div className="pin-show-page">
                {this.renderEditForm()}
                <div className="back-button" onClick={this.goBack}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <div className="pin-show-box">
                    <div className="pin-image-show">
                        <img className="thumbnail" src={showPin.photoUrl} />
                    </div>
                    <div className="pin-content">
                        <div className="pin-options">
                            <div className="pin-buttons">
                                {this.optionToEdit()}
                            </div>
                            <div className="save-to-board">
                                {this.boardNames()}
                            </div>
                        </div>
                        <a>{showPin.link}</a>
                        <h1>{showPin.title}</h1>
                        <NavLink className="pin-owner" to={`/users/${owner.id}`}>
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