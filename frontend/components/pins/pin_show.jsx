import React from 'react';
import EditPinForm from './pin_edit_form';

class PinShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            edit: false
        }
        this.openEditForm = this.openEditForm.bind(this);
        this.closeEditForm = this.closeEditForm.bind(this);
    }

    componentDidMount(){
        this.props.fetchPin(this.props.match.params.pinId);
    }

    openEditForm(e){
        e.preventDefault();
        this.setState({edit: true});
    }

    closeEditForm(){
        this.setState({edit: false})
    }

    renderEditForm(){
        if (this.state.edit){
            const {pin, errors, currentUserId, updatePin, deletePin} = this.props;
            return (
                <EditPinForm 
                    pin={pin}
                    errors={errors}
                    currentUserId={currentUserId}
                    updatePin={updatePin}
                    deletePin={deletePin}
                    closeEditForm={this.closeEditForm}
                />)
        }
    }

    render(){
        const {pin} = this.props;
        if (!pin) return null;
        return (
            <div className="pin-show-page">
                {this.renderEditForm()}
                <div className="pin-show-box">
                    <div className="pin-image">
                        
                    </div>
                    <div className="pin-content">
                        <div className="pin-options">
                            <div className="pin-buttons">
                                <div className="edit-pin" onClick={this.openEditForm}>
                                    <i className="fas fa-pencil-alt"></i>
                                </div>
                            </div>
                            <div className="save-to-board">

                            </div>
                        </div>
                        <h1>{pin.title}</h1>
                        <h3>{pin.description}</h3>
                        <p>{pin.link}</p>
                    </div>
                </div>
                <div className="related-pins">

                </div>
            </div>
        )
    }
}

export default PinShow;