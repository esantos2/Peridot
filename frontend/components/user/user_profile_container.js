import {connect} from 'react-redux';
import UserProfile from './user_profile';
import { createBoard } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({entities: {users}, errors}, {match}) => ({
    user: users[match.params.userId],
    errors: errors.boards,
})

const mapDispatchToProps = dispatch => ({
    createBoard: board => dispatch(createBoard(board)),
    clearErrors: () => dispatch(clearErrors)
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);