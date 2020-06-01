import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateBoardForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => { 
            this.setState({ [field]: e.currentTarget.value }, this.toggleButtonLock());
        }
    }

    toggleButtonLock(){
        const {name} = this.state;
        const saveBtn = document.getElementById("save-board");
        if (!saveBtn) return;
        if (name === ''){ //lock button
            saveBtn.disabled = true;
            saveBtn.classList.add("no-button");
        } else{ //unlock
            saveBtn.disabled = false;
            saveBtn.classList.remove("no-button");
        }
    }

    handleSubmit(e){
        e.preventDefault();
        const {createBoard, closeBoardForm} = this.props;
        const {name} = this.state;
        let newBoard = {name};
        closeBoardForm();
        createBoard(newBoard)
    }

    render(){
        const {closeBoardForm} = this.props;
        const {name} = this.state;
        return (
            <div className="modal-background" onClick={closeBoardForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    <div className="board-form-box">
                        <h1>Create board</h1>
                        <div className="edit-details">
                            <div>
                                <p>Name</p>
                                <input type="text" 
                                    placeholder={"Like \"Places to Go\" or \"Recipes to Make\""} 
                                    value={name}
                                    onChange={this.update("name")} />
                            </div>
                            <div>
                                <p>Visibility (optional)</p>
                                <div className="checkbox">
                                    <input type="checkbox"></input>
                                    <label>Keep this board secret.</label>
                                </div>
                            </div>
                            <div className="date-options">
                                <div>
                                    <p>Add dates (optional)</p>
                                    <p>This can help you plan!</p>
                                </div>
                                <div className="start-end-date">
                                    <label>Start</label>
                                    <input type="date" placeholder="Start date" />
                                    <label>End</label>
                                    <input type="date" placeholder="End date" />
                                </div>
                            </div>
                        </div>
                        <div className="bottom-options">
                            <div className="save-or-cancel">
                                <button className="cancel-edit" onClick={closeBoardForm}>Cancel</button>
                                <button id="save-board" className="save-edit" onClick={this.handleSubmit}>Create</button>
                                {this.toggleButtonLock()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateBoardForm);