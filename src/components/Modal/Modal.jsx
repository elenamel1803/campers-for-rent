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
import { SvgIcon } from 'helpers/svgIcon';

const Modal = ({ advert, onClose }) => {
  const [activeTab, setActiveTab] = useState(null);
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

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWrap>
        <Title>{name}</Title>
        <Wrap>
          <RatingText>
            <SvgIcon id="icon-star" width="16" height="16" />
            {rating} ({reviews.length} Reviews)
          </RatingText>
          <LocationText>
            <SvgIcon
              id="icon-Map"
              width="16"
              height="16"
              fill="none"
              stroke="#101828"
            />
            {location}
          </LocationText>
        </Wrap>
        <PriceText>€{price.toFixed(2)}</PriceText>
        <GaleryWrap>
          {gallery.map((imageUrl, index) => (
            <Img key={index} src={imageUrl} alt={name} />
          ))}
        </GaleryWrap>
        <DescriptionText>{description}</DescriptionText>
        <ButtonClose type="button" onClick={onClose}>
          <SvgIcon id="icon-close" width="32" height="32" stroke="#101828" />
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
        <SvgIcon
          id="icon-line"
          width="100%"
          height="2"
          stroke="rgba(16, 24, 40, 0.2)"
        />
        {activeTab === 'features' && <Features advert={advert} />}
        {activeTab === 'reviews' && <Reviews advert={advert} />}
      </ModalWrap>
    </Overlay>
  );
};

export default Modal;
