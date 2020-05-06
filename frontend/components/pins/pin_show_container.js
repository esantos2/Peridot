import {connect} from 'react-redux';
import PinShow from './pin_show';
import { updatePin, fetchPins, deletePin, saveToBoard } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions'

const mapStateToProps = ({ entities: { users, pins, boards }, session: { currentUserId }, errors }, { match: { params } }) => {
    return {
        pins,
        chosenPinId: parseInt(params.pinId),
        users,
        errors,
        currentUserId,
        boards: Object.values(boards)
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoards: (userId) => dispatch(fetchBoards(userId)),
    clearErrors: () => dispatch(clearErrors()),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId)),
    saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);