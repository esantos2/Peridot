import {connect} from 'react-redux';
import { fetchPins } from '../../actions/pin_actions';
import PinIndex from './pin_index';
import { selectUserPins, selectSuggestedPins, selectOtherUsersPins } from '../../reducers/selectors';

const mapStateToProps = ({entities, session}, {match: {params}}) => {
    let pins;
    let createOption = false;
    let mainFeed = false;
    if (params.boardId) {
        pins = entities.boards[parseInt(params.boardId)].pins
    } else if (params.userId) {
        pins = selectUserPins(entities.pins, parseInt(params.userId));
        createOption = true;
    } else if (params.pinId){
        pins = selectSuggestedPins(entities.pins, session.currentUserId, parseInt(params.pinId))
    } else {
        pins = selectOtherUsersPins(entities.pins, parseInt(session.currentUserId));
        mainFeed = true;
    }
    return { pins, createOption, mainFeed }
}

const mapDispatchToProps = dispatch => ({
    getInfo: () => dispatch(fetchPins())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);