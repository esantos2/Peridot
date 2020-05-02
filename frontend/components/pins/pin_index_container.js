import {connect} from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinIndex from './pin_index';
import { selectUserPins, selectSuggestedPins } from '../../reducers/selectors';

const mapStateToProps = ({entities, session}, {match}) => {
    let pins;
    if (match.params.boardId) {
        const {userId, boardId} = match.params;
        pins = selectBoardPins(entities.pins, userId, boardId);
    } else if (match.params.userId) {
        pins = selectUserPins(entities.pins, session.currentUserId);
    } else {
        pins = selectSuggestedPins(entities.pins, session.currentUserId)
    }
    return { pins }
}

const mapDispatchToProps = dispatch => ({
    fetchPins: () => dispatch(fetchPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);