import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Pricing from './components/Pricing';
import SearchBar from './components/SearchBar';
import Services from './components/Services';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
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