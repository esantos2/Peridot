import {connect} from 'react-redux';
import {logout} from '../../actions/session_actions'
import NavBar from './navbar';

// const mapStateToProps = state => ({
//     currentUser: state.entities.users[state.session.currentUserId]
// })

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
})

export default connect(null, mapDispatchToProps)(NavBar);