

const LoginPage = () => {
    return(
<div className="page">
  <div className="wrap">
    <header className="admin-header" style={{ justifyContent: 'flex-start' }}>
      <a href="index.html" className="logo">
        <span className="logo__mark">a</span>
        airbnb
      </a>
    </header>

    <main className="auth-shell">
      <h1 className="auth-title">Login</h1>

      <form>
        <div className="field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>

        <p className="auth-forgot"><a href="#">Forgot Password ?</a></p>

        <button type="submit" className="btn-login">Login</button>
      </form>
    </main>
  </div>
</div>
    )
}

export default LoginPage