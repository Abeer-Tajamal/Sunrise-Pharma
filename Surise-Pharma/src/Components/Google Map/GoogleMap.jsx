import React from 'react';

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="Google Map"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.075253033239!2d-73.0035963232426!3d41.263697371315864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8756dc2e6e975%3A0x85ffec664243f243!2sSUNRISE%20PHARMACY!5e0!3m2!1sen!2s!4v1706522772049!5m2!1sen!2s"
      ></iframe>
    </div>
  );
};

export default GoogleMap;