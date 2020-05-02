import React from 'react';

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
                        <div>Boards</div>
                        <div>Pins</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;