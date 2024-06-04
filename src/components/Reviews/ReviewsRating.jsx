import { SvgIcon } from '../../helpers/svgIcon';
import { Stars } from './Reviews.styled';

const ReviewRating = ({ reviewer_rating }) => {
  const roundedRating = Math.round(reviewer_rating);
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(
        <div key={i}>
          <SvgIcon id="icon-star" width="16" height="16" />
        </div>
      );
    } else {
      stars.push(
        <div key={i}>
          <SvgIcon id="icon-star_gray" width="16" height="16" />
        </div>
      );
    }
  }

  return <Stars>{stars}</Stars>;
};

export default ReviewRating;
