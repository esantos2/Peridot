import React from 'react';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {user} = this.props;
        return (
            <div>
                <h1>{user.username}</h1>
            </div>
        )
    }
}

export default UserProfile;