

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../App.css';

const ListingFormPage = () => {
  const { id } = useParams(); // If present, it's an Update operation
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    description: '',
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    type: 'Entire home',
    price: 100,
    cleaningFee: 50,
    serviceFee: 30,
    occupancyTaxes: 20,
    amenities: 'wifi, kitchen, parking',
    images: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688'
  });

  // Pre-fill when editing
  useEffect(() => {
    if (id) {
      fetch('http://localhost:5000/api/accommodations')
        .then((res) => res.json())
        .then((data) => {
          const item = data.find((l) => l._id === id);
          if (item) {
            setFormData({
              ...item,
              amenities: Array.isArray(item.amenities) ? item.amenities.join(', ') : item.amenities,
              images: Array.isArray(item.images) ? item.images.join(', ') : item.images
            });
          }
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      guests: Number(formData.guests),
      price: Number(formData.price),
      cleaningFee: Number(formData.cleaningFee),
      serviceFee: Number(formData.serviceFee),
      occupancyTaxes: Number(formData.occupancyTaxes),
      amenities: typeof formData.amenities === 'string' ? formData.amenities.split(',').map((s) => s.trim()) : formData.amenities,
      images: typeof formData.images === 'string' ? formData.images.split(',').map((s) => s.trim()) : formData.images
    };

    const endpoint = id 
      ? `http://localhost:5000/api/accommodations/${id}` 
      : 'http://localhost:5000/api/accommodations';
    const method = id ? 'PUT' : 'POST';

    await fetch(endpoint, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    navigate('/admin');
  };

  return (
    <div className="page">
      <div className="wrap">
        <header className="admin-header">
          <Link to="/" className="logo"><span className="logo__mark">a</span>airbnb</Link>
        </header>

        <main>
          <h1 className="form-page-title">{id ? 'Update Listing' : 'Create Listing'}</h1>

          <form className="listing-form" onSubmit={handleSubmit}>
            <div>
              <div className="field">
                <label htmlFor="title">Listing Name</label>
                <input type="text" id="title" value={formData.title} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="location">Location</label>
                <input type="text" id="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="price">Price per night ($)</label>
                <input type="number" id="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className="field field--description">
                <label htmlFor="description">Description</label>
                <textarea id="description" value={formData.description} onChange={handleChange} required></textarea>
              </div>
            </div>

            <div>
              <div className="field">
                <div className="row-3" style={{ display: 'flex', gap: '10px' }}>
                  <div>
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <input type="number" id="bedrooms" value={formData.bedrooms} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <input type="number" id="bathrooms" value={formData.bathrooms} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="type">Type</label>
                    <select id="type" value={formData.type} onChange={handleChange}>
                      <option value="Entire home">Entire home</option>
                      <option value="Private room">Private room</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="amenities">Amenities (comma-separated)</label>
                <input type="text" id="amenities" value={formData.amenities} onChange={handleChange} />
              </div>

              <div className="field">
                <label htmlFor="images">Image URLs (comma-separated)</label>
                <input type="text" id="images" value={formData.images} onChange={handleChange} />
              </div>
            </div>

            <div className="form-actions" style={{ marginTop: '20px' }}>
              <button type="submit" className="btn-create">{id ? 'Update' : 'Create'}</button>
              <button type="button" className="btn-cancel" onClick={() => navigate('/admin')}>Cancel</button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ListingFormPage;