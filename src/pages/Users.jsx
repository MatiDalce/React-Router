import React from 'react';
import useFetch from '../hooks/useFetch';

export const Users = () => {
  const usersData = useFetch('https://reqres.in/api/users?page=2', {
  headers: {
    'x-api-key': 'reqres-free-v1'
  }
});

  if (!usersData) {
    return (
      <div className="pt-16 px-4 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Usuarios</h1>
        <p>Cargando usuarios...</p>
      </div>
    );
  }

  const users = usersData.data;

  return (
    <div className="pt-16 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Usuarios</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow rounded p-4 flex flex-col items-center"
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
