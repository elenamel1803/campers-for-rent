import AdvertsList from 'components/Adverts/AdvertsList.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllAdverts } from '../../redux/adverts/advertsOperations';
import {
  selectFilteredAdverts,
  selectIsLoading,
} from '../../redux/adverts/advertsSelectors';
import Loader from 'components/Loader/Loader';
import {
  Button,
  CatalogWrap,
  Message,
  MessageWrap,
  Wrap,
} from './CatalogPage.styled';
import Filters from 'components/Filters/Filters';
import { setAllFilters } from '../../redux/filters/filtersSlice';

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const [visibleAdverts, setVisibleAdverts] = useState(4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllAdverts());
  }, [dispatch]);

  const handleSearch = filters => {
    dispatch(setAllFilters(filters));
    setVisibleAdverts(4);
  };

  const visibleFilteredAdverts = filteredAdverts.slice(0, visibleAdverts);

  const loadMore = () => {
    setVisibleAdverts(prev => prev + 4);
  };

  return (
    <CatalogWrap>
      {(isLoading && <Loader />) || (
        <>
          <Filters onSearch={handleSearch} />
          <Wrap>
            {filteredAdverts.length > 0 ? (
              <>
                <AdvertsList adverts={visibleFilteredAdverts} />
                {visibleAdverts < filteredAdverts.length && (
                  <Button type="button" onClick={loadMore}>
                    Load more
                  </Button>
                )}
              </>
            ) : (
              <MessageWrap>
                <Message>Nothing was found for your request.</Message>
              </MessageWrap>
            )}
          </Wrap>
        </>
      )}
    </CatalogWrap>
  );
};

export default CatalogPage;
