import PropTypes from 'prop-types';
import UserContext from './UserContext';

function UserProfile() {
  const userData = UserContext(UserContext);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};
export default UserProfile;
