

const adminDashboardPage = () => {
    return (
<div className="page">
  <div className="wrap">
    <header className="admin-header">
      <a href="index.html" className="logo">
        <span className="logo__mark">a</span>
        airbnb
      </a>

      <div className="admin-user">
        <span className="admin-user__name">John Doe</span>
        <div className="admin-user__controls">
          <span aria-hidden="true">≡</span>
          <span className="admin-user__avatar">☺</span>
        </div>
      </div>
    </header>

    <nav className="admin-nav">
      <button className="admin-nav__btn">View Reservations</button>
      <button className="admin-nav__btn">View Listings</button>
      <button className="admin-nav__btn">Create Listing</button>
    </nav>

    <main>
      <h1 className="reservations-title">My Reservations</h1>

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
          <tr>
            <td>Johann Coetzee</td>
            <td>Property 1</td>
            <td>19/06/2024</td>
            <td>24/06/2024</td>
            <td><button className="btn-delete">Delete</button></td>
          </tr>
          <tr>
            <td>Asif Hassam</td>
            <td>Property 2</td>
            <td>19/06/2024</td>
            <td>19/06/2024</td>
            <td><button className="btn-delete">Delete</button></td>
          </tr>
          <tr>
            <td>Kago Kola</td>
            <td>Property 1</td>
            <td>25/06/2024</td>
            <td>30/06/2024</td>
            <td><button className="btn-delete">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>

  <footer className="site-footer" style={{ marginTop: '25px' }}>
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

export default adminDashboardPage;