import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';

export const Header = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (userId.trim()) {
      navigate(`/users/${userId}`);
      setUserId('');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-4 py-2
                       flex flex-col md:flex-row items-center justify-between
                       h-auto md:h-16">
      {/* Título */}
      <h1 className="text-xl font-bold mb-2 md:mb-0">
        Mi Header
      </h1>

      {/* Contenedor USERS centrado */}
      <div className="flex-1 flex justify-center mb-2 md:mb-0">
        <Link to="/users" className="text-blue-600 hover:underline font-semibold text-lg">
          USERS
        </Link>
      </div>

      {/* Buscador */}
      <nav className="flex items-center gap-2 w-full md:w-auto">
        <form onSubmit={handleSearch} className="flex flex-1 md:flex-none items-center gap-2">
          <input
            type="text"
            placeholder="Buscar ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="border px-2 py-1 rounded flex-grow md:flex-grow-0"
          />
          <button
            type="submit"
            className="bg-blue-600 text-black px-3 py-1 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Buscar
          </button>
        </form>
      </nav>
    </header>
  );
};
