import React from 'react';
import { GalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, tags, onClick },
}) => (
  <GalleryItem>
    <Img onClick={onClick} src={webformatURL} alt={tags} />
  </GalleryItem>
);
