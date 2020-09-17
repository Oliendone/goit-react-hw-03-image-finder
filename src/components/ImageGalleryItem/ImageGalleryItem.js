import React from 'react';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  alt,
  imageClick,
}) {
  return (
    <li className="ImageGalleryItem" onClick={() => imageClick(largeImageURL)}>
      <img src={webformatURL} alt={alt} className="ImageGalleryItem-image" />
    </li>
  );
}
