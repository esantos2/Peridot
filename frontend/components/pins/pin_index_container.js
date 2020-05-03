import {connect} from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinIndex from './pin_index';
import { selectUserPins, selectSuggestedPins } from '../../reducers/selectors';

const mapStateToProps = ({entities, session}, {match: {params}}) => {
    let pins;
    let createOption = false;
    if (params.boardId) {
        pins = entities.boards[params.boardId].pins
    } else if (params.userId) {
        pins = selectUserPins(entities.pins, session.currentUserId);
        createOption = true;
    } else {
        pins = selectSuggestedPins(entities.pins, session.currentUserId)
    }
    return { pins, createOption }
}

const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(fetchPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);