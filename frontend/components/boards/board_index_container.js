import {connect} from 'react-redux';
import { fetchBoards, updateBoard, deleteBoard } from '../../actions/board_actions';
import BoardIndex from './board_index';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({entities: {boards}, session: {currentUserId}, errors}) => ({
    boards: Object.values(boards),
    currentUserId,
    errors: errors.boards
})

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoards: () => dispatch(fetchBoards(params.userId)),
    clearErrors: () => dispatch(clearErrors()),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: (userId, boardId) => dispatch(deleteBoard(userId, boardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);