import { SvgIcon } from '../../helpers/svgIcon';
import { LocationText, RatingText, Wrap } from './RatingLocation.styled';

const RatingLocation = ({ rating, reviews, location }) => (
  <Wrap>
    <RatingText>
      <SvgIcon id="icon-star" width="16" height="16" />
      {rating} ({reviews.length} Reviews)
    </RatingText>
    <LocationText>
      <SvgIcon
        id="icon-map"
        width="16"
        height="16"
        fill="none"
        stroke="var(--main)"
      />
      {location}
    </LocationText>
  </Wrap>
);

export default RatingLocation;
