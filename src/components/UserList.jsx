// components/UserList.js
import React from 'react';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No users found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => (
        <div key={user.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold text-xl mr-4">
              {user.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg">{user.name}</h3>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p className="mb-1"><span className="font-semibold">Company:</span> {user.company.name}</p>
            <p className="mb-1"><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Website:</span> {user.website}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;