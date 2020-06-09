import React from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import CreateBoardForm from '../boards/board_create_form';

class UserProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            boardForm: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleBoardForm = this.toggleBoardForm.bind(this);
    }

    componentDidMount(){
        const {fetchUser, match} = this.props;
        fetchUser(match.params.userId);
        window.scrollTo(0, 0);
        window.addEventListener("click", this.toggleMenu);
    }

    componentWillUnmount(){
        window.removeEventListener("click", this.toggleMenu);
    }

    toggleMenu(e) {
        e.stopPropagation();
        let options = document.getElementById("options");
        let list = document.getElementById("create-options");
        if (!options) return null;
        if (e.target === options && !list.classList.contains("show-menu")) {
            list.classList.add("show-menu");
        } else {
            list.classList.remove("show-menu");
        }
    }

    toggleBoardForm(){
        let status = this.state.boardForm;
        this.setState({boardForm: !status});
    }

    showBoardForm(){
        if (this.state.boardForm){
            const {createBoard, clearErrors, user} = this.props;
            return (<CreateBoardForm 
                createBoard={createBoard}
                clearErrors={clearErrors}
                closeBoardForm={this.toggleBoardForm}
                currentUserId={user.id}
            />)
        }
    }

    currentUserOnly(){
        const {user, currentUserId} = this.props;
        if (user.id === currentUserId){
            return (
                <div>
                    <div className="icon">
                        <i id="options" className="dropdown fas fa-plus"></i>
                    </div>
                    <ul id="create-options" className="drop-down-menu menu-box">
                        <a onClick={this.toggleBoardForm}><li>Create Board</li></a>
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
                    <div className="top-buttons">
                        {this.currentUserOnly()}
                    </div>
                    <div className="user-details">
                        <div className="info">
                            <h1>{`${user.firstName} ${user.lastName}`}</h1>
                            {/* <h3>47 followers • 5 following</h3> */}
                            <h3>{user.bio}</h3>
                        </div>
                        <div className="image">
                            <img className="profile-pic" src="https://peridot-seed.s3-us-west-1.amazonaws.com/profile_blank.jpg"></img>
                            {/* <div className="profile-pic"></div> */}
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