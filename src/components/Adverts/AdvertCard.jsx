import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  Box,
  Button,
  CardWrap,
  DescriptionText,
  DetailsItem,
  DetailsList,
  Img,
  Item,
  LocationText,
  RatingText,
  Title,
  TitleWrap,
  Wrap,
} from './Adverts.styled';
import { truncateText } from '../../helpers/truncateText';
import { capitalizeText } from '../../helpers/capitalizedText';
import { SvgIcon } from 'helpers/svgIcon';
import Air from '../../assets/img/Air.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favorite/favoriteSlice';

const AdvertCard = ({ advert }) => {
  const favorites = useSelector(selectFavorite);
  const [showModal, setShowModal] = useState(false);
  const isFavorite = favorites.some(fav => fav._id === advert._id);
  const dispatch = useDispatch();

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

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
              <button isFavorite={isFavorite} onClick={handleFavoriteClick}>
                <SvgIcon
                  id="icon-hart"
                  width="24"
                  height="24"
                  fill={isFavorite ? '#E44848' : 'none'}
                  stroke={isFavorite ? '#E44848' : '#101828'}
                />
              </button>
            </Box>
          </TitleWrap>
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

          <DescriptionText>{truncateText(description, 63)}</DescriptionText>

          <DetailsList>
            {adults > 0 && (
              <DetailsItem>
                <SvgIcon id="icon-users" />
                {adults} adults
              </DetailsItem>
            )}
            <DetailsItem>
              <SvgIcon id="icon-transmission" fill="none" stroke="#101828" />
              {capitalizeText(transmission)}
            </DetailsItem>
            <DetailsItem>
              <SvgIcon id="icon-engine" />
              {capitalizeText(engine)}
            </DetailsItem>
            {kitchen > 0 && (
              <DetailsItem>
                <SvgIcon id="icon-kitchen" fill="none" stroke="#101828" />
                Kitchen
              </DetailsItem>
            )}
            {beds > 0 && (
              <DetailsItem>
                <SvgIcon id="icon-beds" fill="none" stroke="#101828" />
                {beds} beds
              </DetailsItem>
            )}
            {airConditioner > 0 && (
              <DetailsItem>
                <img src={Air} alt="Air" />
                AC
              </DetailsItem>
            )}
          </DetailsList>

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
