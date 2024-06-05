import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import AdvertCard from 'components/Adverts/AdvertCard';
import { FavoriteWrap, List, Message, MessageWrap } from './Favorite.styled';

const Favorite = () => {
  const favorites = useSelector(selectFavorite);
  return (
    <FavoriteWrap>
      <List>
        {favorites.length === 0 ? (
          <MessageWrap>
            <Message>Sorry, you did not select any advert.</Message>
          </MessageWrap>
        ) : (
          favorites.map(advert => (
            <AdvertCard key={advert._id} advert={advert} />
          ))
        )}
      </List>
    </FavoriteWrap>
  );
};

export default Favorite;
