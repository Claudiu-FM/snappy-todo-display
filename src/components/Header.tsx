
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 border-b">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800">
          My <span className="text-primary">ToDo</span> List
        </h1>
      </div>
    </header>
  );
};

export default Header;
