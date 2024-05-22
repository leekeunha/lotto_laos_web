// src/components/AdditionalImages.js
import React from 'react';

const AdditionalImages = ({ images }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${image}`}
                    style={{ width: '50%', height: 'auto' }}
                />
            ))}
        </div>
    );
};

export default AdditionalImages;
