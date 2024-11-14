// Layout.js
import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-blue-600 text-white p-4">
                <div className="container mx-auto flex justify-center space-x-4">
                    <Link to="/" className="hover:text-blue-300">Home</Link>
                    <Link to="/about" className="hover:text-blue-300">About</Link>
                    <Link to="/services" className="hover:text-blue-300">Services</Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow container mx-auto p-8">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4">
                Footer section
            </footer>
        </div>
    );
}

export default Layout;
