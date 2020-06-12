import React from 'react';

class EditProfileForm extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="modal-background" onClick={this.props.closeEditForm}>
                <div className="modal-child-round-box" onClick={e => e.stopPropagation()}>
                    
                </div>
            </div>
        )
    }
}

export default EditProfileForm;