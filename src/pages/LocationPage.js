import '../App.css';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LocationPage = () => {
    return(
<div className="page">
  <header className="topnav">
    <div className="wrap topnav__row">
      <a href="index.html" className="logo">
        <span className="logo__mark">a</span>
        airbnb
      </a>

      <div className="search-bar-row" style={{ fontSize: '10px', padding: '10px' }}>
        <div className="wrap" style={{ padding: '10px' }}>
          <div className="search-pill">
            <div className="search-pill__field">
              <span className="search-pill__label">Where</span>
              <select className="search-pill__value" style={{ border: 'none', background: 'transparent', font: 'inherit', color: 'inherit', padding: 0, margin: 0, outline: 'none', appearance: 'auto', cursor: 'pointer' }}>
                <option value="Select">Select a location</option>
                <option value="All">All locations</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
                <option value="Cape Town">Cape Town</option>
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
              <button className="search-btn" aria-label="Search">🔍</button>
            </div>
          </div>
        </div>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link">Become a host</a>
        <button className="icon-btn" aria-label="Change language/region">🌐--</button>

        {/*change button icon*/}

        <button className="profile-menu" aria-label="Open menu" style={{ position: 'relative', cursor: 'pointer', background: 'none', border: 'none', font: 'inherit', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px' }}>
          <span aria-hidden="true">≡</span>
          <span className="avatar"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbbdPqXU3wwsJQPwkgU42saoIIg22ct8rNcFV_RU6PA&s=10" alt="profile picture icon" /></span>
          <select style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', border: 'none', background: 'transparent', font: 'inherit' }} aria-label="Login options">
            <option value="" selected disabled>Select</option>
            <option value="login">Login</option>
            <option value="signup">Sign up</option>
          </select>
        </button>
      </div>
    </div>
  </header>

  <main className="wrap">
    <div className="results-header">
      <h1 className="results-header__count">2 stays</h1>
      <p className="results-header__sub">New York, United States · Nov 3 – 8 · 2 guests</p>
    </div>

    <div className="results-shell">
      <div className="results-list">
        <article className="result-row">
          <div className="result-row__media">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnCrfKnTBatSaRZUM7V3lMsZwE2haGJpiE3YNh_hHt0czXbYy3MV-FqY&s=10" alt="Suburban Getaway" />
          </div>
          <div className="result-row__body">
            <div className="result-row__top">
              <div>
                <p className="result-row__title">Suburban Getaway</p>
                <p className="result-row__location">Entire home in New York, United States</p>
              </div>
              <div className="result-row__rating">
                <span aria-hidden="true">♡</span>
                <span>★ 4.92 <span style={{ color: '#717171' }}>(128)</span></span>
              </div>
            </div>
            <p className="result-row__desc">2 beds · 1 bath · Wifi · Kitchen · Free parking on premises</p>
            <p className="result-row__dates">Nov 3 – 8</p>
            <div className="result-row__footer">
              <span></span>
              <div className="result-row__price">
                <strong>$120</strong> night
                <span>$600 total</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</div>
    )
}

export default LocationPage;