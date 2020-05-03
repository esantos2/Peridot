import {connect} from 'react-redux';
import { fetchBoards } from '../../actions/board_actions';
import BoardIndex from './board_index';

const mapStateToProps = ({entities: {boards}, errors}) => ({
    boards: Object.values(boards),
    errors: errors.boards
})

const mapDispatchToProps = (dispatch, {match: {params}}) => ({
    fetchBoards: () => dispatch(fetchBoards(params.userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);