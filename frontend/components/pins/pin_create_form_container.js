import {connect} from 'react-redux';
import CreatePinForm from './pin_create_form';
import { createPin, saveToBoard } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';
import {fetchBoards} from '../../actions/board_actions'

const mapStateToProps = ({entities: {users, boards}, errors, session}) => ({
    owner: users[session.currentUserId],
    boards: Object.values(boards),
    errors: errors.pins
})

const mapDispatchToProps = dispatch => ({
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    createPin: pin => dispatch(createPin(pin)),
    clearErrors: () => dispatch(clearErrors()),
    saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreatePinForm);