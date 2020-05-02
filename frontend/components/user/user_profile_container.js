import {connect} from 'react-redux';
import UserProfile from './user_profile';

const mapStateToProps = ({entities: {users}}, {match}) => ({
    user: users[match.params.userId]
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);