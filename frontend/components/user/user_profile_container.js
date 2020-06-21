import {connect} from 'react-redux';
import UserProfile from './user_profile';
import { createBoard } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';
import { receiveUser, updateDetails } from '../../actions/user_actions';

const mapStateToProps = ({entities: {users}, session: {currentUserId}, errors}, {match}) => ({
    user: users[match.params.userId],
    errors: errors.boards,
    currentUserId
})

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(receiveUser(userId)),
    createBoard: board => dispatch(createBoard(board)),
    clearErrors: () => dispatch(clearErrors),
    updateDetails: user => dispatch(updateDetails(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);