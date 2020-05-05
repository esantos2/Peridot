import {connect} from 'react-redux';
import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = ({entities: {boards}, errors}, {match: {params}}) => ({
    board: boards[params.boardId],
    errors
})

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoard: () => dispatch(fetchBoard(params.userId, params.boardId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);