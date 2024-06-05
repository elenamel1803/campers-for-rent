import AdvertCard from './AdvertCard';
import { List } from './Adverts.styled';

const AdvertsList = ({ adverts }) => {
  return (
    <>
      <List>
        {adverts.map(advert => (
          <AdvertCard key={advert._id} advert={advert} />
        ))}
      </List>
    </>
  );
};

export default AdvertsList;
