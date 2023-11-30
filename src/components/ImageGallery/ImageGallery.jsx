import React from 'react';
import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../GalleryItem/GalleryItem';

export const ImageGallery = ({ images }) => {

  return (
    <Gallery>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} image={image} />;
      })}
    </Gallery>
  );
};
