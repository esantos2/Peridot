import {connect} from 'react-redux';
import { fetchBoard, fetchBoardPins } from '../../actions/board_actions';
import {fetchPins} from '../../actions/pin_actions';
import BoardShow from './board_show';
import { selectBoardPins } from '../../reducers/selectors';

const mapStateToProps = ({entities: {boards, boardPins, pins}, errors}, {match: {params}}) => ({
    board: boards[params.boardId],
    pins: selectBoardPins(boardPins, pins, parseInt(params.boardId)),
    errors
})

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId)),
    fetchPins: () => dispatch(fetchPins()),
    fetchBoardPins: () => dispatch(fetchBoardPins())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);