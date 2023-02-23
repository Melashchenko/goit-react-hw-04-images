import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import { Gallery } from './ImageGallery.styled';

// export const ImageGallery = ({ images: { hits } }) => (
//   <Gallery>
//     {hits.map(hit => (
//       <ImageGalleryItem image={hit} key={hit.id} />
//     ))}
//   </Gallery>
// );

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;

    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </Gallery>
    );
  }
}
