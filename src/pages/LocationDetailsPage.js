import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../App.css';

const LocationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [checkIn, setCheckIn] = useState('2026-11-03');
  const [checkOut, setCheckOut] = useState('2026-11-08');
  const [guests, setGuests] = useState(2);
  const [bookingStatus, setBookingStatus] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/accommodations`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setListing(found || null);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="page"><div className="wrap">Loading details...</div></div>;
  if (!listing) return <div className="page"><div className="wrap">Listing not found.</div></div>;

  // Calculate nights
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const nights = Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)) || 1);

  // Price calculations matching rubric
  const basePrice = listing.price || 120;
  const stayTotal = basePrice * nights;
  const cleaningFee = listing.cleaningFee || 50;
  const serviceFee = listing.serviceFee || 50;
  const occupancyTaxes = listing.occupancyTaxes || 30;
  const weeklyDiscount = listing.weeklyDiscount || 0;
  const grandTotal = stayTotal + cleaningFee + serviceFee + occupancyTaxes - weeklyDiscount;

  const handleReserve = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          accommodationId: listing._id,
          property: listing.title,
          checkIn,
          checkOut,
          guests,
          totalCost: grandTotal
        })
      });

      if (!res.ok) throw new Error('Booking failed');
      setBookingStatus('Reservation successful!');
    } catch (err) {
      setBookingStatus('Error: Could not place reservation.');
    }
  };

  return (
    <div className="page">
      <header className="topnav">
        <div className="wrap topnav__row">
          <Link to="/" className="logo"><span className="logo__mark">a</span>airbnb</Link>
          <div className="nav-right">
            <Link to="/login" className="nav-link">Login</Link>
          </div>
        </div>
      </header>

      <main className="wrap">
        <div className="listing-header">
          <div>
            <h1 className="listing-header__title">{listing.title}</h1>
            <div className="listing-header__meta">
              <span>★ {listing.rating || 4.9} · {listing.reviews || 12} reviews</span>
              <span className="dot">{listing.location}</span>
            </div>
          </div>
        </div>

        {/* 5-Image Gallery Grid */}
        <section className="gallery">
          <div className="gallery__item gallery__main">
            <img src={listing.images?.[0] || 'https://via.placeholder.com/600x400'} alt="Main preview" />
          </div>
          <div className="gallery__item"><img src={listing.images?.[1] || 'https://via.placeholder.com/300'} alt="" /></div>
          <div className="gallery__item"><img src={listing.images?.[2] || 'https://via.placeholder.com/300'} alt="" /></div>
          <div className="gallery__item"><img src={listing.images?.[3] || 'https://via.placeholder.com/300'} alt="" /></div>
          <div className="gallery__item"><img src={listing.images?.[4] || 'https://via.placeholder.com/300'} alt="" /></div>
        </section>

        <div className="listing-layout">
          <div className="listing-main">
            <div className="host-row">
              <div>
                <h2 className="host-row__title">{listing.type} hosted by {listing.host || 'Host'}</h2>
                <p className="host-row__sub">{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} baths</p>
              </div>
            </div>

            <div className="listing-description">
              <p>{listing.description}</p>
            </div>

            <section className="listing-section">
              <h2 className="listing-section__title">What this place offers</h2>
              <div className="amenities-list">
                {listing.amenities?.map((item, idx) => (
                  <div key={idx} className="amenity">✔ {item}</div>
                ))}
              </div>
            </section>
          </div>

          {/* Interactive Cost Calculator Widget */}
          <aside>
            <div className="booking-card">
              <div className="booking-card__top">
                <div className="booking-card__price">${basePrice} <span>night</span></div>
                <div className="booking-card__rating">★ {listing.rating || 4.9}</div>
              </div>

              <div className="booking-fields">
                <div className="booking-fields__row">
                  <div className="booking-fields__cell">
                    <label>Check-in</label>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                  </div>
                  <div className="booking-fields__cell">
                    <label>Checkout</label>
                    <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                  </div>
                </div>
                <div className="booking-fields__guests">
                  <label>Guests</label>
                  <input type="number" min="1" max={listing.guests} value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
                </div>
              </div>

              <button className="btn-primary" onClick={handleReserve}>Reserve</button>
              {bookingStatus && <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{bookingStatus}</p>}

              <div className="price-breakdown">
                <div className="price-breakdown__row"><span>${basePrice} x {nights} nights</span><span>${stayTotal}</span></div>
                <div className="price-breakdown__row"><span>Cleaning fee</span><span>${cleaningFee}</span></div>
                <div className="price-breakdown__row"><span>Service fee</span><span>${serviceFee}</span></div>
                <div className="price-breakdown__row"><span>Occupancy taxes</span><span>${occupancyTaxes}</span></div>
                {weeklyDiscount > 0 && <div className="price-breakdown__row"><span>Discount</span><span>-${weeklyDiscount}</span></div>}
                <div className="price-breakdown__row total"><span>Total</span><span>${grandTotal}</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default LocationDetailsPage;