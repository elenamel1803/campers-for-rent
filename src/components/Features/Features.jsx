import BookingForm from 'components/BookingForm/BookingForm';
import FeaturesList from './FeaturesList';
import DetailsList from './DetailsList';
import { SvgIcon } from '../../helpers/svgIcon';
import { FeaturesWrap, Title } from './Features.styled';

const Features = ({ advert }) => {
  return (
    <FeaturesWrap>
      <div>
        <FeaturesList advert={advert} />
        <Title>Vehicle details</Title>
        <SvgIcon
          id="icon-line"
          width="100%"
          height="2"
          stroke="rgba(16, 24, 40, 0.2)"
        />
        <DetailsList advert={advert} />
      </div>
      <BookingForm />
    </FeaturesWrap>
  );
};

export default Features;
