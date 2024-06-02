import { useEffect, useState } from 'react';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import {
  ButtonClose,
  ButtonText,
  DescriptionText,
  GaleryWrap,
  Img,
  LocationText,
  ModalWrap,
  NavWrap,
  Overlay,
  PriceText,
  RatingText,
  Title,
  Wrap,
} from './Modal.styled';

const Modal = ({ advert, onClose }) => {
  const [activeTab, setActiveTab] = useState('');
  const { gallery, name, price, rating, location, description, reviews } =
    advert;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  // const galeryList = gallery.map((imageUrl, index) => (
  //   <img key={index} src={imageUrl} alt={name} width={290} height={310} />
  // ));

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWrap>
        <Title>{name}</Title>
        <Wrap>
          <RatingText>
            {rating} ({reviews.length} Reviews)
          </RatingText>
          <LocationText>{location}</LocationText>
        </Wrap>
        <PriceText>€{price.toFixed(2)}</PriceText>
        <GaleryWrap>
          {gallery.map((imageUrl, index) => (
            <Img key={index} src={imageUrl} alt={name} />
          ))}
        </GaleryWrap>
        <DescriptionText>{description}</DescriptionText>
        <ButtonClose type="button" onClick={onClose}>
          Close
        </ButtonClose>
        <NavWrap>
          <ButtonText
            type="button"
            className={activeTab === 'features' ? 'active' : ''}
            onClick={() => setActiveTab('features')}
          >
            Features
          </ButtonText>
          <ButtonText
            type="button"
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </ButtonText>
        </NavWrap>
        {activeTab === 'features' ? (
          <Features advert={advert} />
        ) : (
          <Reviews advert={advert} />
        )}
      </ModalWrap>
    </Overlay>
  );
};

export default Modal;
