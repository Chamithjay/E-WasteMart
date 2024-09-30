import React from 'react';
import './css/Spinner.css'; // Custom CSS file for extra styling

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center spinner-container">
      {/* Bootstrap spinner */}
      <div className="spinner-border text-primary custom-spinner" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;