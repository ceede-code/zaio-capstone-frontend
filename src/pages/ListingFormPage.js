

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
    images: ' '
  });

  // Pre-fill when editing
  useEffect(() => {
    if (id) {
      fetch('https://zaio-capstone-backend.onrender.com/api/accommodations')
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
      ? `https://zaio-capstone-backend.onrender.com/api/accommodations/${id}` 
      : 'https://zaio-capstone-backend.onrender.com/api/accommodations';
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
      <Link to="/">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUAG0iTdwwIPvRT8JoFAk91vie50WVoq2XYrjxDjvJZg&s=10" alt="" style={{ height: '35px', width: 'auto', 'margin-top': '20px' }} />
      </Link>

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
                <label htmlFor="amenities">Amenities (separate with comma.)</label>
                <input type="text" id="amenities" value={formData.amenities} onChange={handleChange} />
              </div>

              <div className="field">
                <label htmlFor="images">Image URLs (separate with comma)</label>
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