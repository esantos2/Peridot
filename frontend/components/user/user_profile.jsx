import React from 'react';
import {NavLink} from 'react-router-dom';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {user} = this.props;
        return (
            <div className="user-profile-box">
                <div className="header">
                    <div className="top-buttons">
                        {/* create board, pin */}
                        <div>Create stuff</div>
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