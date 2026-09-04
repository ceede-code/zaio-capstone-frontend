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
    fetch('http://localhost:5000/api/accommodations')
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
      {/* Retain topnav structure, replacing a href with Link */}
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