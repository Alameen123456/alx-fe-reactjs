import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="container mx-auto sm:p-4 sm:p-6 md:p-8 lg:p-12 max-w-xs md:max-w-sm lg:max-w-lg">
      <div className="flex flex-col items-center">
        <img
          src={user.profilePicture}
          alt={user.name}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full object-cover"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4">
          {user.name}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-2 text-center">
          {user.bio}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
