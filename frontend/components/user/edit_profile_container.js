import { connect } from 'react-redux';
import { updateDetails } from '../../actions/user_actions';
import EditProfileForm from './edit_profile';

const mapStateToProps = ({ entities: {users}, session: { currentUserId}}) => ({
    currentUserId,
    users
});

const mapDispatchToProps = dispatch => ({
    updateDetails: user => dispatch(updateDetails(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileForm);