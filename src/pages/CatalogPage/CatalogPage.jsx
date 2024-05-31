import AdvertsList from 'components/Adverts/AdvertsList.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdverts } from '../../redux/advertsOperations';
import { selectAdverts, selectIsLoading } from '../../redux/advertsSelectors';
import Loader from 'components/Loader/Loader';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const [visibleAdverts, setVisibleAdverts] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const loadMore = () => {
    setVisibleAdverts(prev => prev + 4);
  };

  return (
    <>
      <AdvertsList adverts={adverts.slice(0, visibleAdverts)} />

      {(isLoading && <Loader />) ||
        (visibleAdverts < adverts.length && (
          <button onClick={loadMore}>Load more</button>
        ))}
    </>
  );
};

export default CatalogPage;
