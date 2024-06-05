import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { truncateText } from '../../helpers/truncateText';
import { SvgIcon } from '../../helpers/svgIcon';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/favoriteSlice';
import Modal from 'components/Modal/Modal';
import RatingLocation from 'components/RatingLocation/RatingLocation';
import AdvertDetails from 'components/AdvertDetails/AdvertDetails';
import {
  Box,
  Button,
  CardWrap,
  DescriptionText,
  Img,
  Item,
  Title,
  TitleWrap,
} from './Adverts.styled';

const AdvertCard = ({ advert }) => {
  const favorites = useSelector(selectFavorite);
  const [showModal, setShowModal] = useState(false);
  const isFavorite = favorites.some(fav => fav._id === advert._id);
  const dispatch = useDispatch();

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(advert._id));
    } else {
      dispatch(addToFavorite(advert));
    }
  };

  const {
    _id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    reviews,
    adults,
    transmission,
    engine,
    details,
  } = advert;

  const { kitchen, beds, airConditioner } = details;

  return (
    <>
      <Item id={_id}>
        <Img src={gallery[0]} alt={name} width={290} height={310} />
        <CardWrap>
          <TitleWrap>
            <Title>{truncateText(name, 23)}</Title>
            <Box>
              <Title>€{price.toFixed(2)}</Title>
              <button
                data-isfavorite={isFavorite}
                onClick={handleFavoriteClick}
              >
                <SvgIcon
                  id="icon-hart"
                  width="24"
                  height="24"
                  fill={isFavorite ? 'var(--button)' : 'none'}
                  stroke={isFavorite ? 'var(--button)' : 'var(--main)'}
                />
              </button>
            </Box>
          </TitleWrap>

          <RatingLocation
            rating={rating}
            reviews={reviews}
            location={location}
          />

          <DescriptionText>{truncateText(description, 63)}</DescriptionText>

          <AdvertDetails
            adults={adults}
            transmission={transmission}
            engine={engine}
            kitchen={kitchen}
            beds={beds}
            airConditioner={airConditioner}
          />

          <Button type="button" onClick={toggleModal}>
            Show more
          </Button>
        </CardWrap>
      </Item>
      {showModal && <Modal advert={advert} onClose={toggleModal} />}
    </>
  );
};

export default AdvertCard;
