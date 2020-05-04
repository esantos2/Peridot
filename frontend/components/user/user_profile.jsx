import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import CreateBoardForm from '../boards/board_create_form';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boardForm: false
        }
        this.openBoardForm = this.openBoardForm.bind(this);
        this.closeBoardForm = this.closeBoardForm.bind(this);
    }

    openBoardForm(){
        this.setState({boardForm: true});
    }

    showBoardForm(){
        if (this.state.boardForm){
            const {createBoard, clearErrors, user} = this.props;
            return (<CreateBoardForm 
                createBoard={createBoard}
                clearErrors={clearErrors}
                closeBoardForm={this.closeBoardForm}
                currentUserId={user.id}
            />)
        }
    }

    closeBoardForm(){
        this.setState({boardForm: false});
    }

    render(){
        const {user} = this.props;
        return (
            <div className="user-profile-box">
                {this.showBoardForm()}
                <div className="header">
                    <div className="top-buttons">
                        {/* create board, pin */}
                        <a onClick={this.openBoardForm}>Create Board</a>
                        <Link to="/pin-builder">Create Pin</Link>
                        <div>Edit profile</div>
                        {/* edit profile */}
                    </div>
                    <div className="user-details">
                        <div className="info">
                            <h1>{user.username}</h1>
                            <h3>Followers</h3>
                        </div>
                        <div className="image">
                            <div className="profile-pic"></div>
                        </div>
                    </div>
                    <div className="user-selection">
                        <NavLink className="button" to={`/users/${user.id}/boards`}>Boards</NavLink>
                        <NavLink className="button" to={`/users/${user.id}/pins`}>Pins</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;