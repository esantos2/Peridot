import React from 'react'
import { NavLink } from 'react-router-dom';
import CreateBoardForm from '../boards/board_create_form';

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
            chosenBoardId: '',
            photoFile: null,
            photoUrl: null,
            boardForm: false
        }
        this.update = this.update.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.boardNames = this.boardNames.bind(this);
        this.makeBoardSelection = this.makeBoardSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.openBoardForm = this.openBoardForm.bind(this);
        this.closeBoardForm = this.closeBoardForm.bind(this);
    }

    componentDidMount(){
        const {owner, fetchBoards, clearErrors} = this.props;
        fetchBoards(owner.id);
        clearErrors();
    }

    update(field){
        return e => { this.setState({[field]: e.currentTarget.value})}
    }
    
    openBoardForm() {
        this.setState({ boardForm: true });
    }

    closeBoardForm() {
        this.setState({ boardForm: false });
    }

    showBoardForm() {
        if (this.state.boardForm) {
            const { createBoard, clearErrors, owner } = this.props;
            return (<CreateBoardForm
                createBoard={createBoard}
                clearErrors={clearErrors}
                closeBoardForm={this.closeBoardForm}
                currentUserId={owner.id}
            />)
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const {user_id, title, description, link, chosenBoardId, photoFile} = this.state;
        const formData = new FormData();
        formData.append('pin[title]', title);
        formData.append('pin[description]', description);
        formData.append('pin[link]', link);
        formData.append('pin[user_id]', user_id);
        if (photoFile){
            formData.append('pin[photo]', photoFile)
        }
        // let newUser = {user_id, title, description, link};
        this.props.createPin(formData)
            .then( pin => this.props.saveToBoard({board_id: parseInt(chosenBoardId), pin_id: pin.pin.id}))
            .then( () => this.setState({confirm: true}))
    }

    showImage() {
        document.getElementById("image-preview").classList.toggle("image-load");
    }
    
    showMenu() {
        document.getElementById("board-names").classList.toggle("show-menu")
    }
    
    hideBackground(){
        document.getElementById("image-background").remove();
        // document.getElementById("image-background").classList.toggle("show-background");
    }

    handleFile(e){
        // e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ 
                photoFile: file, 
                photoUrl: fileReader.result
            });
            this.showImage();
        }
        this.hideBackground();
        if (file) fileReader.readAsDataURL(file);
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

    makeBoardSelection(e){
        document.getElementById("selected-text").innerHTML = e.currentTarget.innerHTML;
        this.selectBoard(e);
        this.update("chosenBoardId")(e);
    }

    selectBoard(e) {
        e.preventDefault();
        document.getElementById("board-names").classList.toggle("show-menu")
    }

    render(){
        const {owner} = this.props;
        const {title, description, link, photoUrl} = this.state;
        const preview = photoUrl ? <img id="image-preview" src={photoUrl} /> : null;
        return (
            <div className="pin-modal">
                {this.showBoardForm()}
                <div className="pin-form-box">
                    {this.displayConfirmation()}
                    <div className="pin-top-buttons">
                        <button className="save-pin" onClick={this.handleSubmit}>Save</button>
                        {/* <button className="select-board" onClick={this.selectBoard}>Select</button> */}
                        {this.boardNames()}
                    </div>
                    <div className="pin-main-content">
                        <div className="pin-image-box">
                            <input type="file" name="file-upload" id="file-upload" onChange={this.handleFile} />
                            <label htmlFor="file-upload">
                                <div id="image-background">
                                    <div className="pin-image-back">
                                        <i className="fas fa-arrow-alt-circle-up"></i>
                                        <p>Click to upload</p>
                                    </div>
                                </div>
                            </label>
                            <div className="image-preview">
                                {preview}
                            </div>
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
                                        <i className="fas fa-user-circle"></i>
                                        {owner.username}
                                    </div>
                                    <div className="pin-add-description">
                                        <textarea 
                                            rows="1"
                                            placeholder="Tell everyone what your Pin is about" 
                                            value={description} 
                                            onChange={this.update("description")}></textarea>
                                    </div>
                                </div>
                                <div className="pin-link">
                                    <input 
                                        type="text"
                                        placeholder="Add a destination link (optional)"
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