import AdvertCard from './AdvertCard';
import { AdvertsWrap, List } from './Adverts.styled';

const AdvertsList = ({ adverts }) => {
  return (
    <AdvertsWrap>
      <List>
        {adverts.map(advert => (
          <AdvertCard key={advert._id} advert={advert} />
        ))}
      </List>
    </AdvertsWrap>
  );
};

export default AdvertsList;
