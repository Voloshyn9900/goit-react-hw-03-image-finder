import React from 'react';
import { GalleryItem, Image } from './GalleryItem.styled';

export const ImageGalleryItem = ({ image: { id, webformatURL, largeImageURL } }) => {
  return (
    <GalleryItem>
      <Image src={webformatURL} alt="" />
    </GalleryItem>
  );
};
