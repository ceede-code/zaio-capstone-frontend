

const listingFormPage = () => {
    return(
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
      <button className="admin-nav__btn">View my listings</button>
    </nav>

    <main>
      <h1 className="form-page-title">Create Listing</h1>

      <form className="listing-form">
        <div>
          <div className="field">
            <label htmlFor="listingName">Listing Name</label>
            <input type="text" id="listingName" />
          </div>
          <div className="field">
            <label htmlFor="locationLeft">Location</label>
            <input type="text" id="locationLeft" />
          </div>
          <div className="field field--description">
            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
          </div>
        </div>

        <div>
          <div className="field">
            <div className="row-3">
              <div>
                <label htmlFor="rooms">Rooms</label>
                <input type="text" id="rooms" />
              </div>
              <div>
                <label htmlFor="baths">Baths</label>
                <input type="text" id="baths" />
              </div>
              <div>
                <label htmlFor="type">Type</label>
                <select id="type">
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label htmlFor="locationRight">Location</label>
            <input type="text" id="locationRight" />
          </div>
          <div className="field">
            <label htmlFor="amenities">Amenities</label>
            <div className="amenities-row">
              <input type="text" id="amenities" />
              <button type="button" className="btn-add">Add</button>
            </div>
          </div>
        </div>

        <div className="images-field">
          <label htmlFor="images">Images</label>
          <button type="button" className="btn-upload">Upload Image</button>
          <div className="images-dropzone" id="images"></div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-create">Create</button>
          <button type="button" className="btn-cancel">Cancel</button>
        </div>
      </form>
    </main>
  </div>
</div>
    )
}

export default listingFormPage