import React from 'react'

class CreatePinForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user_id: this.props.owner.id,
            title: '',
            description: '',
            link: '',
            confirm: false
        }
        this.update = this.update.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => { this.setState({[field]: e.currentTarget.value})}
    }

    selectBoard(e){
        e.preventDefault();
    }

    handleSubmit(e){
        e.preventDefault();
        const {user_id, title, description, link} = this.state;
        let newUser = {user_id, title, description, link} ;
        this.props.createPin(newUser)
            .then(this.setState({confirm: true}))
        //spin animation while loading
    }

    displayConfirmation(){
        if (this.state.confirm){
            return (
                <div className="modal-background">
                    <div className="modal-child" onClick={e => e.stopPropagation()}>
                        <div className="pin-confirmation-box">

                        </div>
                    </div>
                </div>
            )
        }
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