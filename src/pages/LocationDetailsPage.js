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
       
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto' }} />
      </Link>
  
        <div className="nav-right">
          <a href="#" className="nav-link">Become a host</a>
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
        <div className="listing-header">
          <div>
            <h1 className="listing-header__title">{listing.title}</h1>
            <div className="listing-header__meta">
              <span>★ {listing.rating || 4.9} · {listing.reviews || 12} reviews</span>
              <span className="dot">{listing.location}</span>
            </div>
          </div>
        </div>

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

<section className="listing-section" id="reviews">
  <h2 className="reviews-score">★ 4.9 · 12 reviews</h2>

  <div className="rating-bars">
    <div className="rating-bar"><span className="rating-bar__label">Cleanliness</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">4.9</span></div>
    <div className="rating-bar"><span className="rating-bar__label">Accuracy</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">4.8</span></div>
    <div className="rating-bar"><span className="rating-bar__label">Communication</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">5.0</span></div>
    <div className="rating-bar"><span className="rating-bar__label">Location</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">4.8</span></div>
    <div className="rating-bar"><span className="rating-bar__label">Check-in</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">4.9</span></div>
    <div className="rating-bar"><span className="rating-bar__label">Value</span><span className="rating-bar__track"><span className="rating-bar__fill"></span></span><span className="rating-bar__score">4.7</span></div>
  </div>

  <div className="review-grid">
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="https://www.google.com/imgres?q=random%20face%20pictures&imgurl=https%3A%2F%2Fwpdaddy.com%2Fwp-content%2Fuploads%2F2020%2F11%2Fthispersondoesnotexist.jpg&imgrefurl=https%3A%2F%2Fwpdaddy.com%2Fbest-face-generators-to-create-random-faces-online%2F&docid=RDfExU3wstx-3M&tbnid=OPOtIf17ENN5eM&vet=12ahUKEwiNnuf4-9WWAxVXQUEAHcZVJqAQnPAOegUInwIQAA..i&w=830&h=611&hcb=2&ved=2ahUKEwiNnuf4-9WWAxVXQUEAHcZVJqAQnPAOegUInwIQAA" alt="Joel" /></span>
        <div><div className="review-card__name">Joel</div><div className="review-card__date">October 2026</div></div>
      </div>
      <p className="review-card__text">Beautiful, spotless home. Sherry was incredibly responsive and the location was perfect for our trip.</p>
    </div>
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="https://www.google.com/imgres?q=random%20face%20pictures&imgurl=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fthumbnail%2Fpurepng.com-man-face-will-smithfaceshumansfrontalhuman-identityman-14215268856478r8b7.png&imgrefurl=https%3A%2F%2Fpurepng.com%2Fphoto%2F12069%2Fman-face-will-smith&docid=URzoFEszJEfXfM&tbnid=ukqGUMbSpV1elM&vet=12ahUKEwiNnuf4-9WWAxVXQUEAHcZVJqAQnPAOegUIsAIQAA..i&w=280&h=381&hcb=2&ved=2ahUKEwiNnuf4-9WWAxVXQUEAHcZVJqAQnPAOegUIsAIQAA" alt="Val" /></span>
        <div><div className="review-card__name">Val</div><div className="review-card__date">September 2026</div></div>
      </div>
      <p className="review-card__text">Exactly as pictured, comfortable beds and a great backyard for the kids to play in.</p>
    </div>
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="data:image/jpeg;base64,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" alt="Marcus" /></span>
        <div><div className="review-card__name">Marcus</div><div className="review-card__date">August 2026</div></div>
      </div>
      <p className="review-card__text">One of the best stays we've had. Quiet street, quick self check-in, and the kitchen had everything we needed for the week.</p>
    </div>
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6v5X5vINl28FO7IGpPv1h6K8Ie4QHdEDkLS9AQd5HmA&s=10" alt="Priya" /></span>
        <div><div className="review-card__name">Priya</div><div className="review-card__date">August 2026</div></div>
      </div>
      <p className="review-card__text">Great communication from Sherry throughout. Would absolutely book again.</p>
    </div>
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="data:image/jpeg;base64,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" alt="Diego" /></span>
        <div><div className="review-card__name">Diego</div><div className="review-card__date">July 2026</div></div>
      </div>
      <p className="review-card__text">Loved the neighborhood — quiet but close to everything. Highly recommend for a small group getaway.</p>
    </div>
    <div className="review-card">
      <div className="review-card__head">
        <span className="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9DiiryjRPXGItgMY6eFvYHhaKPkfCPkwbZf0FuYZ8w&s" alt="Amara" /></span>
        <div><div className="review-card__name">Amara</div><div className="review-card__date">June 2026</div></div>
      </div>
      <p className="review-card__text">Super clean and cozy. Check-in instructions were clear and easy to follow.</p>
    </div>
  </div>

  <button className="btn-outline">Show all 12 reviews</button>
</section>

<div className="host-card">
  <div className="host-card__side">
    <span className="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3hRoSn1RwovSI1Hhrmm6S0awI8ddS9aLDNbdif0mvFQ&s=10" alt="Sherry J." /></span>
    <p className="host-card__name">Sherry J.</p>
    <p className="host-card__badge">Superhost</p>
  </div>
  <div className="host-card__body">
    <h2 className="host-row__title">Hosted by Sherry</h2>
    <div className="host-stats">
      <div className="host-stat"><strong>12</strong><span>Reviews</span></div>
      <div className="host-stat"><strong>4.92 ★</strong><span>Rating</span></div>
      <div className="host-stat"><strong>3</strong><span>Years hosting</span></div>
    </div>
    <p className="host-card__about">Hi, I'm Sherry — I've lived in this neighborhood for over a decade and love sharing recommendations for the best local spots with my guests.</p>
    <p className="host-card__facts"><strong>Response rate:</strong> 100%<br /><strong>Responds within</strong> an hour</p>
    <button className="btn-outline">Message host</button>
    <div className="safety-note">To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</div>
  </div>
</div>

<section className="listing-section">
  <h2 className="listing-section__title">Things to know</h2>
  <div className="things-grid">
    <div className="things-col">
      <h4>House rules</h4>
      <ul>
        <li><span className="material-symbols-outlined">nest_clock_farsight_analog</span> Check-in after 3:00 PM</li>
        <li><span className="material-symbols-outlined">nest_clock_farsight_analog</span> Checkout before 11:00 AM</li>
        <li><span className="material-symbols-outlined">group</span> 8 guests maximum</li>
        <li><span className="material-symbols-outlined">smoke_free</span> No smoking</li>
        <li><span className="material-symbols-outlined">do_not_disturb_on_total_silence</span> No pets</li>
        <li><span className="material-symbols-outlined">do_not_disturb_on_total_silence</span> No parties or events</li>
      </ul>
    </div>
    <div className="things-col">
      <h4>Safety &amp; property</h4>
      <ul>
        <li><span className="material_symbols_outlined">detector_alarm</span> Carbon monoxide alarm</li>
        <li><span className="material_symbols_outlined">detector_alarm</span> Smoke alarm</li>
        <li><span className="material_symbols_outlined">camera_video</span> Exterior security camera present</li>
        <li><span className="material_symbols_outlined">pool</span> Pool without a gate or lock</li>
      </ul>
      <a href="#">Show more</a>
    </div>
    <div className="things-col">
      <h4>Cancellation policy</h4>
      <ul>
        <li><span className="material_symbols_outlined">calendar</span> Free cancellation before Oct 29. Review the host's full cancellation policy.</li>
      </ul>
      <a href="#">Show more</a>
    </div>
  </div>
</section>



<section className="gray-section">
  <div className="wrap">
    <h2 className="section__title">Nearby eighborhoods</h2>
    <div className="link-grid">
      <a href="#">Chelsea</a>
      <a href="#">Barlake</a>
      <a href="#">Williamsburg</a>
      <a href="#">East Side</a>
      <a href="#">Greenwich Village</a>
      <a href="#">Astoria</a>
      <a href="#">Harlem</a>
      <a href="#">Financial District</a>
    </div>

    <h2 className="section__title">Other homes you may like</h2>
    <div className="link-grid">
      <a href="search.html">Grand Oasis</a>
      <a href="search.html">Historic Retreat</a>
      <a href="search.html">Modern Loft Escape</a>
      <a href="search.html">Cozy Studio Downtown</a>
    </div>
  </div>
</section>
      </main>

<footer className="site-footer">
  <div className="wrap">
    <div className="footer-cols">
      <div>
        <h4>Support</h4>
        <ul>
          <li>Help Center</li>
          <li>AirCover</li>
          <li>Safety information</li>
          <li>Cancellation options</li>
          <li>Our COVID-19 response</li>
        </ul>
      </div>
      <div>
        <h4>Community</h4>
        <ul>
          <li>Airbnb.org: disaster relief</li>
          <li>Support Afghan refugees</li>
          <li>Celebrating diversity &amp; belonging</li>
        </ul>
      </div>
      <div>
        <h4>Hosting</h4>
        <ul>
          <li>Airbnb your home</li>
          <li>AirCover for Hosts</li>
          <li>Explore hosting resources</li>
          <li>Visit our community forum</li>
          <li>How to host responsibly</li>
        </ul>
      </div>
      <div>
        <h4>Airbnb</h4>
        <ul>
          <li>Newsroom</li>
          <li>New features</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Gift cards</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom__left">
        <span>© 2026 Airbnb clone, Inc.</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Sitemap</span>
      </div>
      <div className="footer-bottom__right">
        <span className="footer-bottom__lang"><span className='matewrial-symbols-outlined'>globe</span> English (US)</span>
        <span className="footer-bottom__lang">$ USD</span>
        <span className="footer-bottom__social">
          <span aria-hidden="true">𝕏</span>
        </span>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default LocationDetailsPage;