import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import '../App.css';

const LocationPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();


  const queryParams = new URLSearchParams(location.search);
  const cityQuery = queryParams.get('city') || 'All';

  useEffect(() => {
    fetch('https://zaio-capstone-backend.onrender.com/api/accommodations')
      .then((res) => res.json())
      .then((data) => {
        if (cityQuery !== 'All' && cityQuery !== 'Select') {
          setListings(data.filter((item) => item.location.toLowerCase().includes(cityQuery.toLowerCase())));
        } else {
          setListings(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [cityQuery]);

  return (
    <div className="page">
    <header className="topnav">
      <div className="wrap topnav__row">
       
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto' }} />
      </Link>
  
        <div className="nav-right">
          <Link to="/Admin" className="nav-link">Become a host</Link>
          <button className="icon-btn" aria-label="Change language/region"><span className='material-symbols-outlined' >globe</span></button>
  
          <button className="profile-menu" aria-label="Open menu" style={{ position: 'relative', cursor: 'pointer', background: 'none', border: 'none', font: 'inherit', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px' }}>
            <span aria-hidden="true">≡</span>
            <span className="avatar"><img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="" /></span>
            <select 
              onChange={(e) => {
                if (e.target.value === 'login') navigate('/login');
              }}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer' }}
            >
              <option value="" disabled selected>Select</option>
              <option value="login">Login</option>
            </select>
          </button>
        </div>
      </div>
    </header>
      <main className="wrap">


        <div className="results-header">
          <h1 className="results-header__count">{listings.length} stays</h1>
          <p className="results-header__sub">{cityQuery} stays available</p>
        </div>

        <div className="results-shell">
          <div className="results-list">
            {loading ? (
              <p>Loading stays...</p>
            ) : (
              listings.map((stay) => (
                <article 
                  key={stay._id} 
                  className="result-row" 
                  onClick={() => navigate(`/locations/${stay._id}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="result-row__media">
                    <img src={stay.images?.[0] || 'https://via.placeholder.com/300'} alt={stay.title} />
                  </div>
                  <div className="result-row__body">
                    <div className="result-row__top">
                      <div>
                        <p className="result-row__title">{stay.title}</p>
                        <p className="result-row__location">{stay.type} in {stay.location}</p>
                      </div>
                      <div className="result-row__rating">
                        <span>★ {stay.rating || 4.5}</span>
                      </div>
                    </div>
                    <p className="result-row__desc">
                      {stay.bedrooms} beds · {stay.bathrooms} bath · {stay.amenities?.slice(0, 3).join(' · ')}
                    </p>
                    <div className="result-row__footer">
                      <div className="result-row__price">
                        <strong>${stay.price}</strong> night
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationPage;