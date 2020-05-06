import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
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

    componentDidMount(){
        const {fetchUser, match} = this.props;
        fetchUser(match.params.userId);
    }

    showMenu(){
        document.getElementById("create-options").classList.toggle("show-menu")
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

    currentUserOnly(){
        const {user, currentUserId} = this.props;
        if (user.id === currentUserId){
            return (
                <div className="top-buttons">
                    <div className="icon " onClick={this.showMenu}>
                        <i className="dropdown fas fa-plus"></i>
                    </div>
                    <ul id="create-options" className="drop-down-menu">
                        <a onClick={this.openBoardForm}><li>Create Board</li></a>
                        <Link to="/pin-builder"><li>Create Pin</li></Link>
                    </ul>
                    <div className="icon">
                        <i className="fas fa-pencil-alt"></i>
                    </div>
                </div>
            )
        }
    }

    render(){
        const {user} = this.props;
        if (!user) return null;
        return (
            <div className="user-profile-box">
                {this.showBoardForm()}
                <div className="header">
                    {this.currentUserOnly()}
                    <div className="user-details">
                        <div className="info">
                            <h1>{user.username}</h1>
                            {/* <h3>47 followers • 5 following</h3> */}
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

export default withRouter(UserProfile);