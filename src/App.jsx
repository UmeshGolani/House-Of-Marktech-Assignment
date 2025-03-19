// App.js - Main component
import React, { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handler for search functionality
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredUsers(users);
      return;
    }
    
    const filtered = users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="app">
      <Hero />
      <div className="container mx-auto px-4">
        <Services />
        <div className="my-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Users</h2>
          <SearchBar onSearch={handleSearch} />
          {isLoading ? (
            <Loader />
          ) : (
            <UserList users={filteredUsers} />
          )}
        </div>
        <Pricing />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;