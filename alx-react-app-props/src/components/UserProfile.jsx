import PropTypes from 'prop-types';
import React, { UseContext } from 'react';

function UserProfile() {
  const userData = UserContext(UseContext);
  const [UseContext,UserContext]
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
