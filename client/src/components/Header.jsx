import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-blue-600 p-4 text-white flex justify-between items-center">
    <h1 className="text-xl font-bold">Health Chat</h1>
    <nav className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/chat" className="hover:underline">Chat</Link>
      <Link to="/book" className="hover:underline">Book Appointment</Link>
      <Link to="/login" className="hover:underline">Login</Link>
    </nav>
  </header>
);

export default Header;
