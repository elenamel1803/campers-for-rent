import { useSelector } from 'react-redux';
import { selectFavorite } from '../../redux/favorite/favoriteSelectors';
import AdvertCard from 'components/Adverts/AdvertCard';
import { FavoriteWrap, List } from './Favorite.styled';

const Favorite = () => {
  const favorites = useSelector(selectFavorite);
  return (
    <FavoriteWrap>
      <List>
        {favorites.length === 0 ? (
          <p>Sorry, you did not select any advert.</p>
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
