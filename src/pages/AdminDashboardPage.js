import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const AdminDashboardPage = () => {
  const [view, setView] = useState('reservations'); 
  const [reservations, setReservations] = useState([]);
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const token = localStorage.getItem('token');

  // Load reservations and listings
  const fetchData = () => {
    fetch('http://localhost:5000/api/reservations/host', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => setReservations(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));

    fetch('http://localhost:5000/api/accommodations')
      .then((res) => res.json())
      .then((data) => setListings(Array.isArray(data) ? data : []))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteReservation = async (id) => {
    await fetch(`http://localhost:5000/api/reservations/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    setReservations(reservations.filter((r) => r._id !== id));
  };

  const handleDeleteListing = async (id) => {
    await fetch(`http://localhost:5000/api/accommodations/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    setListings(listings.filter((item) => item._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="page">
      <div className="wrap">
        <header className="admin-header">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto' }} />
        </Link>
          <div className="admin-user">
            <span className="admin-user__name">{user.username || 'Host'}</span>
            <button onClick={handleLogout} style={{ marginLeft: '10px', cursor: 'pointer' }}>Logout</button>
          </div>
        </header>

        <nav className="admin-nav" style={{ display: 'flex', gap: '10px', margin: '20px 0' }}>
          <button className="admin-nav__btn" onClick={() => setView('reservations')}>View Reservations</button>
          <button className="admin-nav__btn" onClick={() => setView('listings')}>View Listings</button>
          <button className="admin-nav__btn" onClick={() => navigate('/admin/create')}>Create Listing</button>
        </nav>

        <main>
          {view === 'reservations' ? (
            <>
              <h1 className="reservations-title">Reservations</h1>
              <table className="reservations-table">
                <thead>
                  <tr>
                    <th>Booked by</th>
                    <th>Property</th>
                    <th>Checkin</th>
                    <th>Checkout</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reservations.map((res) => (
                    <tr key={res._id}>
                      <td>{res.user?.username || 'Guest'}</td>
                      <td>{res.property || 'Property'}</td>
                      <td>{res.checkIn}</td>
                      <td>{res.checkOut}</td>
                      <td>
                        <button className="btn-delete" onClick={() => handleDeleteReservation(res._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : (
            <>
              <h1 className="reservations-title">My Listings</h1>
              <table className="reservations-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {listings.map((item) => (
                    <tr key={item._id}>
                      <td>{item.title}</td>
                      <td>{item.location}</td>
                      <td>${item.price}</td>
                      <td>
                        <button onClick={() => navigate(`/admin/edit/${item._id}`)} style={{ marginRight: '8px' }}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDeleteListing(item._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;