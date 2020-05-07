import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateBoardForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => { this.setState({ [field]: e.currentTarget.value }) }
    }

    handleSubmit(e){
        e.preventDefault();
        const {createBoard, closeBoardForm, currentUserId} = this.props;
        const {name} = this.state;
        let newBoard = {name};
        closeBoardForm();
        createBoard(newBoard)
            .then(board =>{ 
                this.props.history.push(`/users/${currentUserId}/boards/${board.board.id}`)} );
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
                                    <p>Add dates (optional -</p>
                                    <p>This can help you plan!)</p>
                                </div>
                                <input type="date" />
                            </div>
                        </div>
                        <div className="bottom-options">
                            <div className="save-or-cancel">
                                <button className="cancel-edit" onClick={closeBoardForm}>Cancel</button>
                                <button className="save-edit" onClick={this.handleSubmit}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CreateBoardForm);