import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {

  const [selectedCity, setSelectedCity] = useState('All');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/locations?city=${selectedCity}`);
  };
  


    return(
<div className="page">
  <header className="topnav">
    <div className="wrap topnav__row">

    <Link to="/">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto' }} />
    </Link>

      <nav className="primary-nav">
        <a href="index.html" className="is-active">Places to stay</a>
        <a href="#">Experiences</a>
        <a href="#">Online Experiences</a>
      </nav>

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

  <div className="search-bar-row">
    <div className="wrap">
      <div className="search-pill">
        <div className="search-pill__field">
          <span className="search-pill__label">Where</span>
          <select className="search-pill__value" style={{ border: 'none', background: 'transparent', font: 'inherit', color: 'inherit', padding: 0, margin: 0, outline: 'none', appearance: 'auto', cursor: 'pointer' }}>
            <option value="Select">Select a location</option>
            <option value="All">All locations</option>
          </select>
        </div>
        <div className="search-pill__divider"></div>
        <div className="search-pill__field">
          <span className="search-pill__label">Check in date</span>
          <input type="date" className="search-pill__value" value="" placeholder="select a date" style={{ border: 'none', background: 'transparent', font: 'inherit', color: 'inherit', padding: 0, margin: 0, outline: 'none', cursor: 'pointer', fontFamily: 'inherit', width: 'auto' }} />
        </div>
        <div className="search-pill__divider"></div>
        <div className="search-pill__field">
          <span className="search-pill__label">Check out date</span>
          <input type="date" className="search-pill__value" value="" placeholder="select a date" style={{ border: 'none', background: 'transparent', font: 'inherit', color: 'inherit', padding: 0, margin: 0, outline: 'none', cursor: 'pointer', fontFamily: 'inherit', width: 'auto' }} />
        </div>
        <div className="search-pill__divider"></div>
        <div className="search-pill__field">
          <span className="search-pill__label">Guests</span>
          <span className="search-pill__value">0 guests</span>
        </div>

        <div className="search-pill__submit">
          <button className="search-btn" onClick={handleSearch} aria-label="Search"><span className='material-symbols-outlined' >search</span></button>
        </div>
      </div>
    </div>
  </div>

  {/* <section className="hero">
    <div className="hero__media">
      <img src="https://boutique-homes-prod.sfo3.cdn.digitaloceanspaces.com/properties/4165/008-villa-camps-bay_villa_cape-town-south-africa_exterior-1753146831769.jpg" alt="cover photo" />
    </div>
    <div className="hero__media-fallback"></div>

    <div className="hero__content">
      <h1 className="hero__title">Not sure where to go? Perfect.</h1>
      <button className="hero__cta">Get inspired</button>
    </div>
  </section> */}

  <section className="hero">
  <div className="hero__media">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3hBIghhqNVz4ULvQE0s2xbGox9h7gbgNXC9Od3p0W22wAJfpYbi8myfr&s=10"
      alt="cover photo"
    />
  </div>
  <div className="hero__media-fallback"></div>

  <div className="hero__content">
    <h1 className="hero__title">Not sure where to go? Perfect.</h1>
    <button className="hero__cta">Get inspired</button>
  </div>
</section>

  <main>
    <section className="wrap section">
      <h2 className="section__title">Inspiration for your next trip</h2>
      <div className="promo-grid">
        <article className="promo-card promo-card--1">
          <div className="promo-card__img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5_rmMLmG5ssXC18Ku9clue5JX9Z6sJzkUsEBzQZtb6WkyTUhjGCxfoVI&s=10" alt="Sandton City Hotel" /></div>
          <div className="promo-card__footer">
            <p className="promo-card__title">Sandton City Hotel</p>
            <p className="promo-card__sub">3.1 miles away</p>
          </div>
        </article>

        <article className="promo-card promo-card--2">
          <div className="promo-card__img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-id6MRERqLBesKCErS8Nh5Kt3378vXAH6rpDLhkkrF4IEmpVp6dylVw&s=10" alt="Joburg City Hotel" /></div>
          <div className="promo-card__footer">
            <p className="promo-card__title">Joburg City Hotel</p>
            <p className="promo-card__sub">115 miles away</p>
          </div>
        </article>

        <article className="promo-card promo-card--3">
          <div className="promo-card__img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGDRP-tK5fsj4WLJ-n5lH2nN-9UTxkHHsrYUcjwpixiHicMH6jWkgWnPU&s=10" alt="Woodmead Hotel" /></div>
          <div className="promo-card__footer">
            <p className="promo-card__title">Woodmead Hotel</p>
            <p className="promo-card__sub">20 miles away</p>
          </div>
        </article>

        <article className="promo-card promo-card--4">
          <div className="promo-card__img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6n8QMXjiFt9zDidqypVcWWbnZGjdwqSUVycMnGsy57g&s=10" alt="Hyde Park Hotel" /></div>
          <div className="promo-card__footer">
            <p className="promo-card__title">Hyde Park Hotel</p>
            <p className="promo-card__sub">2.6 miles away</p>
          </div>
        </article>
      </div>
    </section>

    <section className="wrap section">
      <h2 className="section__title">Discover Airbnb Experiences</h2>
      <div className="experience-grid">
        <article className="experience-card">
          <div className="experience-card__media"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_qdZTYwzGeB79dpb7kiXWhC9umM6fCRLV33EzRZaoNGDdusNjmstzqO8&s=10" alt="Things to do on your trip" /></div>
          <div className="experience-card__content">
            <h3 className="experience-card__title">Things to do on your trip</h3>
            <button className="pill-btn">Experiences</button>
          </div>
        </article>

        <article className="experience-card">
          <div className="experience-card__media"><img src="https://cdn.prod.website-files.com/60d1f0b413ba8348509a33a6/632054ac16db8a61c4572be2_how-to-be-a-better-cook-19.jpg" alt="Things to do from home" /></div>
          <div className="experience-card__content">
            <h3 className="experience-card__title">Things to do from home</h3>
            <button className="pill-btn">Online Experiences</button>
          </div>
        </article>
      </div>
    </section>

    <section className="wrap section">
      <div className="giftcard-section">
        <div className="giftcard-section__text">
          <h2>Shop Airbnb gift cards</h2>
          <button className="pill-btn pill-btn--dark">Learn more</button>
        </div>
        <div className="giftcard-section__media">
          <div className="giftcard giftcard--1"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTyEQX55NMnhRBe87XLQQJAAGDAzmlE_vdx_nR1bz7yKZOZv8AU" alt="Airbnb gift card design 1" /></div>
          <div className="giftcard giftcard--2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEtw8WN-bUD8JrxlbNEoCQfIMliSfMxtRw9vSeiKsgDg&s" alt="Airbnb gift card design 2" /></div>
          <div className="giftcard giftcard--3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWXBq19fedGrJapnhBp62eGF0HYtoENE-n2CzbJEbEbg&s" alt="Airbnb gift card design 3" /></div>
        </div>
      </div>
    </section>

    <section className="wrap section">
      <article className="hosting-banner">
        <div className="hosting-banner__media"><img src="https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/bltb7285ace9fae47ce/69f0fe42443672dcce5df112/Article_1_Is_my_place_right_for_Airbnb_.png?crop=96.2p,67.9p,x1.4p,y27.5p&width=720&height=405&auto=webp" alt="Host smiling outdoors" /></div>
        <div className="hosting-banner__content">
          <h2 className="hosting-banner__title">Questions about hosting?</h2>
          <button className="pill-btn">Visit Help Center</button>
        </div>
      </article>
    </section>

    <section className="wrap section">
      <h2 className="section__title">Inspiration for future getaways</h2>
      <div className="dest-tabs">
        <button className="is-active">Destinations for arts &amp; culture</button>
        <button>Destinations for outdoor adventure</button>
        <button>Family-friendly destinations</button>
        <button>Space-themed destinations</button>
        <button>Unique stays</button>
      </div>
      <div className="dest-grid">
        <a href="search.html"><strong>Pretoria</strong> <span>South Africa</span></a>
        <a href="search.html"><strong>Cape Town</strong> <span>South Africa</span></a>
        <a href="search.html"><strong>Los Angeles</strong> <span>California</span></a>
        <a href="search.html"><strong>Nairobi</strong> <span>Kenya</span></a>
        <a href="search.html"><strong>Port Elizabeth</strong> <span>South Africa</span></a>
        <a href="search.html"><strong>Durban</strong> <span>South Africa</span></a>
        <a href="search.html"><strong>Tokyo</strong> <span>Japan</span></a>
        <a href="search.html"><strong>Washington</strong> <span>District of Columbia</span></a>
        <a href="search.html"><strong>Bloemfontein</strong> <span>South Africa</span></a>
        <a href="search.html"><strong>Austin</strong> <span>Texas</span></a>
        <a href="search.html"><strong>Reykjavik</strong> <span>Iceland</span></a>
        <a href="search.html"><strong>Show more</strong></a>
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
          <span className="footer-bottom__lang"><span className='material-symbols-outlined'>globe</span> English (US)</span>
          <span className="footer-bottom__lang">$ USD</span>
          <span className="footer-bottom__social">
            <span aria-hidden="true">𝕏</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</div>
    )
}

export default Home;