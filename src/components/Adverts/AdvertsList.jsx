import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/advertsSelectors';
import Loader from 'components/Loader/Loader';
import AdvertCard from './AdvertCard';
import { AdvertsWrap, List } from './Adverts.styled';

const AdvertsList = ({ adverts }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <AdvertsWrap>
      {isLoading && <Loader />}
      <List>
        {adverts.length > 0 &&
          adverts.map(advert => (
            <AdvertCard key={advert._id} advert={advert} />
          ))}
      </List>
    </AdvertsWrap>
  );
};

export default AdvertsList;
