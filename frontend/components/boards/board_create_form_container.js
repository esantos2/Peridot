import { connect } from 'react-redux';
import CreateBoardForm from './board_create_form';
import { createBoard } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({errors}) => ({
    errors
})

const mapDispatchToProps = dispatch => ({
    createBoard: board => dispatch(createBoard(board)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateBoardForm);