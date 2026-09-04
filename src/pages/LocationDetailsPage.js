
import "../App.css";

const LocationDetailsPage = () => {
    return(
<div className="page">
  <header className="topnav">
    <div className="wrap topnav__row">
      <a href="index.html" className="logo">
        <span className="logo__mark">a</span>
        airbnb
      </a>

      <div className="search-pill search-pill--compact">
        <div className="search-pill__field" style={{ flex: 1 }}>
          <input className="search-pill__input" type="text" placeholder="Start your search" aria-label="Search" />
        </div>
        <div className="search-pill__submit">
          <button className="search-btn" aria-label="Search">🔍</button>
        </div>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link">Become a host</a>
        <button className="icon-btn" aria-label="Change language/region"><span className="material-symbols-outlined">globe</span></button>
        <button className="profile-menu" aria-label="Open menu">
          <span aria-hidden="true">≡</span>
          <span className="avatar"><img src="#" alt="" /></span>
        </button>
      </div>
    </div>
  </header>

  <main className="wrap">
    <div className="listing-header">
      <div>
        <h1 className="listing-header__title">Suburban Getaway</h1>
        <div className="listing-header__meta">
          <span>★ 4.92 · <a href="#reviews">12 reviews</a></span>
          <span className="dot">Superhost</span>
          <span className="dot"><a href="#">New York, United States</a></span>
        </div>
      </div>
      <div className="listing-header__actions">
        <button className="text-btn">⇪ Share</button>
        <button className="text-btn">♡ Save</button>
      </div>
    </div>

    <section className="gallery">
      <div className="gallery__item gallery__main"><img src="#" alt="Living room with sectional sofa" /></div>
      <div className="gallery__item"><img src="#" alt="Entry hallway" /></div>
      <div className="gallery__item"><img src="#" alt="Kitchen" /></div>
      <div className="gallery__item"><img src="#" alt="Dining area" /></div>
      <div className="gallery__item"><img src="#" alt="Exterior of the home" /></div>
    </section>

    <div className="listing-layout">
      <div className="listing-main">
        <div className="host-row">
          <div>
            <h2 className="host-row__title">Entire home hosted by Sherry J.</h2>
            <p className="host-row__sub">8 guests · 4 bedrooms · 4 beds · 3.5 baths</p>
          </div>
          <span className="avatar"><img src="#" alt="Sherry J." /></span>
        </div>

        <div style={{ padding: '8px 0 24px', borderBottom: '1px solid var(--border-light)' }}>
          <div className="highlight-row">
            <span className="material-symbols-outlined">Home</span>
            <div>
              <p className="highlight-row__title">Entire home</p>
              <p className="highlight-row__desc">You'll have the home to yourself.</p>
            </div>
          </div>
          <div className="highlight-row">
            <span className="material-symbols-outlined">stars_2</span>
            <div>
              <p className="highlight-row__title">Enhanced Clean</p>
              <p className="highlight-row__desc">This host committed to Airbnb's 5-step enhanced cleaning process. <a href="#" style={{ color: 'var(--ink)', fontWeight: 600 }}>Show more</a></p>
            </div>
          </div>
          <div className="highlight-row">
            <span className="material-symbols-outlined">key</span>
            <div>
              <p className="highlight-row__title">Self check-in</p>
              <p className="highlight-row__desc">Check yourself in with the keypad.</p>
            </div>
          </div>
          <div className="highlight-row">
            <span className="material-symbols-outlined">calendar_today</span>
            <div>
              <p className="highlight-row__title">Free Cancellation</p>
              <p className="highlight-row__desc">Superhosts are experienced, highly rated hosts committed to providing great stays for guests.</p>
            </div>
          </div>
        </div>

        <div className="listing-description">
          <p>Escape the city without leaving it behind. This bright, design-forward home sits on a quiet tree-lined street just minutes from downtown, with a sun-filled living room, a fully equipped kitchen and a private backyard perfect for morning coffee. Ideal for families or small groups looking for a comfortable home base.</p>
          <a href="#" style={{ fontWeight: 600, textDecoration: 'underline' }}>Show more</a>
        </div>

        <section className="listing-section">
          <h2 className="listing-section__title">Where you'll sleep</h2>
          <div className="sleep-card">
            <div className="sleep-card__img"><img src="#" alt="Bedroom with white bedding" /></div>
            <p className="sleep-card__title">Bedroom</p>
            <p className="sleep-card__sub">1 king bed</p>
          </div>
        </section>

        <section className="listing-section">
          <h2 className="listing-section__title">What this place offers</h2>
          <div className="amenities-list">
            <div className="amenity"><span className="material-symbols-outlined">wifi</span> Wifi</div>
            <div className="amenity"><span className="material-symbols-outlined">dining</span> Kitchen</div>
            <div className="amenity"><span className="material-symbols-outlined">local_parking</span> Free parking on premises</div>
            <div className="amenity"><span className="material-symbols-outlined">cool_to_dry</span> Air conditioning</div>
            <div className="amenity"><span className="material-symbols-outlined">tv</span> TV</div>
            <div className="amenity"><span className="material-symbols-outlined">laundry</span> Washer</div>
            <div className="amenity"><span className="material-symbols-outlined">air</span> Heating</div>
            <div className="amenity"><span className="material-symbols-outlined">workspaces</span> Dedicated workspace</div>
            <div className="amenity"><span className="material-symbols-outlined">detector_alarm</span> Smoke alarm</div>
            <div className="amenity"><span className="material-symbols-outlined">pool</span> Pool</div>
          </div>
          <button className="btn-outline">Show all 32 amenities</button>
        </section>

        <section className="listing-section">
          <h2 className="listing-section__title">5 nights in New York</h2>
          <p className="avail-sub">Nov 3, 2026 – Nov 8, 2026</p>

          <div className="calendar-pair">
            <div>
              <div className="calendar__head">
                <button className="calendar__nav">‹</button>
                <span>November 2026</span>
                <span></span>
              </div>
              <div className="calendar__grid">
                <span className="dow">S</span><span className="dow">M</span><span className="dow">T</span><span className="dow">W</span><span className="dow">T</span><span className="dow">F</span><span className="dow">S</span>
                <span className="muted"></span><span className="muted"></span><span>1</span><span>2</span><span className="selected">3</span><span className="in-range">4</span><span className="in-range">5</span>
                <span className="in-range">6</span><span className="in-range">7</span><span className="selected">8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span>
                <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                <span>27</span><span>28</span><span>29</span><span>30</span>
              </div>
            </div>
            <div>
              <div className="calendar__head">
                <span></span>
                <span>December 2026</span>
                <button className="calendar__nav">›</button>
              </div>
              <div className="calendar__grid">
                <span className="dow">S</span><span className="dow">M</span><span className="dow">T</span><span className="dow">W</span><span className="dow">T</span><span className="dow">F</span><span className="dow">S</span>
                <span className="muted"></span><span className="muted"></span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                <span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span>
                <span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span>
                <span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span>
                <span>27</span><span>28</span><span>29</span><span>30</span><span>31</span>
              </div>
            </div>
          </div>

          <div className="avail-footer">
            <a href="#">Clear dates</a>
            <span></span>
          </div>
        </section>

        <section className="listing-section" id="reviews">
          <h2 className="reviews-score">★ 4.9 · 12 reviews</h2>

          <div className="rating-bars">
            <div className="rating-bar"><span className="rating-bar__label">Cleanliness</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '96%' }}></span></span><span className="rating-bar__score">4.9</span></div>
            <div className="rating-bar"><span className="rating-bar__label">Accuracy</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '94%' }}></span></span><span className="rating-bar__score">4.8</span></div>
            <div className="rating-bar"><span className="rating-bar__label">Communication</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '98%' }}></span></span><span className="rating-bar__score">5.0</span></div>
            <div className="rating-bar"><span className="rating-bar__label">Location</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '92%' }}></span></span><span className="rating-bar__score">4.8</span></div>
            <div className="rating-bar"><span className="rating-bar__label">Check-in</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '96%' }}></span></span><span className="rating-bar__score">4.9</span></div>
            <div className="rating-bar"><span className="rating-bar__label">Value</span><span className="rating-bar__track"><span className="rating-bar__fill" style={{ width: '90%' }}></span></span><span className="rating-bar__score">4.7</span></div>
          </div>

          <div className="review-grid">
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Joel" /></span>
                <div><div className="review-card__name">Joel</div><div className="review-card__date">October 2026</div></div>
              </div>
              <p className="review-card__text">Beautiful, spotless home. Sherry was incredibly responsive and the location was perfect for our trip.</p>
            </div>
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Val" /></span>
                <div><div className="review-card__name">Val</div><div className="review-card__date">September 2026</div></div>
              </div>
              <p className="review-card__text">Exactly as pictured, comfortable beds and a great backyard for the kids to play in.</p>
            </div>
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Marcus" /></span>
                <div><div className="review-card__name">Marcus</div><div className="review-card__date">August 2026</div></div>
              </div>
              <p className="review-card__text">One of the best stays we've had. Quiet street, quick self check-in, and the kitchen had everything we needed for the week.</p>
            </div>
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Priya" /></span>
                <div><div className="review-card__name">Priya</div><div className="review-card__date">August 2026</div></div>
              </div>
              <p className="review-card__text">Great communication from Sherry throughout. Would absolutely book again.</p>
            </div>
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Diego" /></span>
                <div><div className="review-card__name">Diego</div><div className="review-card__date">July 2026</div></div>
              </div>
              <p className="review-card__text">Loved the neighborhood — quiet but close to everything. Highly recommend for a small group getaway.</p>
            </div>
            <div className="review-card">
              <div className="review-card__head">
                <span className="avatar"><img src="#" alt="Amara" /></span>
                <div><div className="review-card__name">Amara</div><div className="review-card__date">June 2026</div></div>
              </div>
              <p className="review-card__text">Super clean and cozy. Check-in instructions were clear and easy to follow.</p>
            </div>
          </div>

          <button className="btn-outline">Show all 12 reviews</button>
        </section>

        <div className="host-card">
          <div className="host-card__side">
            <span className="avatar"><img src="#" alt="Sherry J." /></span>
            <p className="host-card__name">Sherry J.</p>
            <p className="host-card__badge">Superhost</p>
          </div>
          <div className="host-card__body">
            <h2 className="host-row__title" style={{ marginBottom: '16px' }}>Hosted by Sherry</h2>
            <div className="host-stats">
              <div className="host-stat"><strong>12</strong><span>Reviews</span></div>
              <div className="host-stat"><strong>4.92 ★</strong><span>Rating</span></div>
              <div className="host-stat"><strong>3</strong><span>Years hosting</span></div>
            </div>
            <p className="host-card__about">Hi, I'm Sherry — I've lived in this neighborhood for over a decade and love sharing recommendations for the best local spots with my guests.</p>
            <p className="host-card__facts"><strong>Response rate:</strong> 100%<br /><strong>Responds within</strong> an hour</p>
            <button className="btn-outline" style={{ marginTop: 0 }}>Message host</button>
            <div className="safety-note">🔒 To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</div>
          </div>
        </div>

        <section className="listing-section" style={{ borderBottom: 'none' }}>
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
      </div>

      <aside>
        <div className="booking-card">
          <div className="booking-card__top">
            <div className="booking-card__price">$120 <span>night</span></div>
            <div className="booking-card__rating">★ 4.92 · <a href="#reviews" style={{ textDecoration: 'underline' }}>128 reviews</a></div>
          </div>

          <div className="booking-fields">
            <div className="booking-fields__row">
              <div className="booking-fields__cell">
                <label>Check-in</label>
                <div>11/3/2026</div>
              </div>
              <div className="booking-fields__cell">
                <label>Checkout</label>
                <div>11/8/2026</div>
              </div>
            </div>
            <div className="booking-fields__guests">
              <div>
                <label>Guests</label>
                <div>2 guests</div>
              </div>
              <span>⌄</span>
            </div>
          </div>

          <button className="btn-primary">Reserve</button>
          <p className="booking-card__note">You won't be charged yet</p>

          <div className="price-breakdown">
            <div className="price-breakdown__row"><span>$120 x 5 nights</span><span>$600</span></div>
            <div className="price-breakdown__row"><span>Cleaning fee</span><span>$50</span></div>
            <div className="price-breakdown__row"><span>Service fee</span><span>$85</span></div>
            <div className="price-breakdown__row"><span>Occupancy taxes and fees</span><span>$40</span></div>
            <div className="price-breakdown__row total"><span>Total</span><span>$775</span></div>
          </div>
        </div>
        <div className="report-link">⚑ Report this listing</div>
      </aside>
    </div>
  </main>

  <section className="gray-section">
    <div className="wrap">
      <h2 className="section__title">New York neighborhoods</h2>
      <div className="link-grid">
        <a href="#">Chelsea</a>
        <a href="#">SoHo</a>
        <a href="#">Williamsburg</a>
        <a href="#">Upper East Side</a>
        <a href="#">Greenwich Village</a>
        <a href="#">Astoria</a>
        <a href="#">Harlem</a>
        <a href="#">Financial District</a>
      </div>

      <h2 className="section__title">Other homes you may like</h2>
      <div className="link-grid">
        <a href="search.html">Charming Waterfront Oasis</a>
        <a href="search.html">Historic City Center Retreat</a>
        <a href="search.html">Modern Loft Escape</a>
        <a href="search.html">Cozy Studio Downtown</a>
      </div>
    </div>
  </section>

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
          <span className="footer-bottom__lang">🌐 English (US)</span>
          <span className="footer-bottom__lang">$ USD</span>
          <span className="footer-bottom__social">
            <span aria-hidden="true">𝔉</span>
            <span aria-hidden="true">𝕏</span>
            <span aria-hidden="true">◎</span>
          </span>
        </div>
      </div>
    </div>
  </footer>
</div>
    )
}

export default LocationDetailsPage;