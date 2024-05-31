import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/advertsSelectors';
import Loader from 'components/Loader/Loader';
import AdvertCard from './AdvertCard';

const AdvertsList = ({ adverts }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      <ul>
        {adverts.length > 0 &&
          adverts.map(advert => (
            <AdvertCard key={advert._id} advert={advert} />
          ))}
      </ul>
    </>
  );
};

export default AdvertsList;
