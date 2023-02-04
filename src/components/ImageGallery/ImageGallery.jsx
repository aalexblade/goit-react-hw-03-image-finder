import PropTypes from "prop-types";
import { ImageGalleryWrapper } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryItem onClickImg={onClick} pictures={pictures} />
    </ImageGalleryWrapper>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};