import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={image.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageList;
