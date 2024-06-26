import { useEffect, useState } from 'react';
import RatingLocation from 'components/RatingLocation/RatingLocation';
import Features from 'components/Features/Features';
import Reviews from 'components/Reviews/Reviews';
import { SvgIcon } from 'helpers/svgIcon';
import {
  ButtonClose,
  ButtonText,
  DescriptionText,
  GaleryWrap,
  Img,
  ModalWrap,
  NavWrap,
  Overlay,
  PriceText,
  Title,
} from './Modal.styled';

const Modal = ({ advert, onClose }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [openTab, setOpenTab] = useState('features');
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
        <RatingLocation rating={rating} reviews={reviews} location={location} />
        <PriceText>€{price.toFixed(2)}</PriceText>
        <GaleryWrap>
          {gallery.map((imageUrl, index) => (
            <Img key={index} src={imageUrl} alt={name} />
          ))}
        </GaleryWrap>
        <DescriptionText>{description}</DescriptionText>
        <ButtonClose type="button" onClick={onClose}>
          <SvgIcon
            id="icon-close"
            width="32"
            height="32"
            stroke="var(--main)"
          />
        </ButtonClose>
        <NavWrap>
          <ButtonText
            type="button"
            className={openTab === 'features' ? 'active' : ''}
            onClick={() => {
              if (openTab !== 'features' || openTab === 'features') {
                setOpenTab('features');
                setActiveTab('features');
              }
            }}
          >
            Features
          </ButtonText>
          <ButtonText
            type="button"
            className={openTab === 'reviews' ? 'active' : ''}
            onClick={() => {
              if (openTab !== 'reviews') {
                setOpenTab('reviews');
                setActiveTab('reviews');
              }
            }}
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
