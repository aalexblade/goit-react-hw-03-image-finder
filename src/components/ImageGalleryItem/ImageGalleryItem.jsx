import PropTypes from "react";
import { ImageGalleryCard, GalleryCardImg } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ pictures, onClick }) => { 

    return pictures.map((pictures, index) => { 
        return (
            <ImageGalleryCard key={index}>
                <GalleryCardImg
                    onClick={() => {
                        onClickImg(picture.largeImageURL);
                    }}
                    src={picture.webformatURL}
                    alt={picture.tags}
                />
            </ImageGalleryCard>
        );
    })
};

ImageGalleryItem.propTypes = {
    pictures: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}