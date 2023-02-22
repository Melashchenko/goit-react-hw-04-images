import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images: { hits }, onClick }) => (
  <Gallery>
    {hits.map(hit => (
      <ImageGalleryItem image={hit} key={hit.id} onClick={onClick} />
    ))}
  </Gallery>
);
