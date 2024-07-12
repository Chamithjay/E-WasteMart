// src/components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('YOUR_UPLOAD_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadStatus('Image uploaded successfully!');
      console.log(response.data);
    } catch (error) {
      setUploadStatus('Error uploading image.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <label htmlFor="pImages">Upload Image/s</label>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} className='form-control'/>
        {preview && <img src={preview} alt="Preview" style={{ width: '200px', marginTop: '10px' }} />}
        <br />
        <button type="submit"  className="btn btn-primary">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default ImageUpload;
