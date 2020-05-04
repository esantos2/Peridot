import React from 'react'
import { NavLink } from 'react-router-dom';

class CreatePinForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.owner.id,
            title: '',
            description: '',
            link: '',
            confirm: false,
            errors: this.props.errors,
            chosenBoardId: ''
        }
        this.update = this.update.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.boardNames = this.boardNames.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const {owner, fetchBoards, clearErrors} = this.props;
        fetchBoards(owner.id);
        clearErrors();
    }

    update(field){
        return e => { this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(e){
        e.preventDefault();
        const {user_id, title, description, link, chosenBoardId} = this.state;
        let newUser = {user_id, title, description, link};
        this.props.createPin(newUser)
            .then( pin => this.props.saveToBoard(
                {
                    boardId: chosenBoardId,
                    pinId: pin.id
                }
            ))
            .then( () => this.setState({confirm: true}))
    }

    displayConfirmation(){
        if (this.state.confirm){
            return (
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className="pin-confirmation-box">
                            <div className="confirm-image"></div>
                            <h1>Success</h1>
                            <p>Go to <NavLink to={`/users/${this.state.user_id}/pins`}>Profile</NavLink></p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    displayErrors(){
        const {errors} = this.props
        if (errors.length > 0){
            return <div className="error">{errors[0]}</div>
        }
    }

    boardNames() {
        const { boards } = this.props;
        if (!boards) return null;
        return (
            <select id="board-names" className="board-names" onChange={this.update("chosenBoardId")}>
                <option value="" defaultValue>--Select board--</option>
                {boards.map((board, idx) => {
                    return (
                        <option key={idx} value={board.id}>{board.name}</option>
                    )
                })}
            </select>
        )
    }

    selectBoard(e) {
        e.preventDefault();
        // this.boardNames();
        document.getElementById("board-names").classList.toggle("show-menu")
    }

    render(){
        const {owner} = this.props;
        const {title, description, link} = this.state;
        return (
            <div className="pin-modal">
                <div className="pin-form-box">
                    {this.displayConfirmation()}
                    <div className="pin-top-buttons">
                        <button className="save-pin" onClick={this.handleSubmit}>Save</button>
                        <button className="select-board" onClick={this.selectBoard}>Select</button>
                        {this.boardNames()}
                    </div>
                    <div className="pin-main-content">
                        <div className="pin-image-box">
                            <div className="pin-image-back">
                                <i className="fas fa-arrow-alt-circle-up"></i>
                                <p>Click to upload</p>
                            </div>
                            <div className="save-from-site"></div>
                        </div>
                        <div className="pin-create-fields">
                            <div className="pin-create-inputs">
                                <div className="pin-details">
                                    <div className="pin-add-title">
                                        {this.displayErrors()}
                                        <input 
                                            type="text" 
                                            placeholder="Add your title" 
                                            value={title} 
                                            onChange={this.update("title")}/>
                                    </div>
                                    <div className="pin-owner">
                                        {owner.username}
                                    </div>
                                    <div className="pin-add-description">
                                        <textarea 
                                            placeholder="Tell everyone what your Pin is about" 
                                            value={description} 
                                            onChange={this.update("description")}></textarea>
                                    </div>
                                </div>
                                <div className="pin-link">
                                    <input 
                                        type="text"
                                        placeholder="Add a destination link"
                                        value={link}
                                        onChange={this.update("link")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePinForm;