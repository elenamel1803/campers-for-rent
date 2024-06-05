import BookingForm from 'components/BookingForm/BookingForm';
import ReviewRating from './ReviewsRating';
import {
  Box,
  FirstLetter,
  Item,
  List,
  Name,
  ReviewsWrap,
  Text,
  Wrap,
} from './Reviews.styled';

const Reviews = ({ advert }) => {
  const firstNameLetter = name => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <ReviewsWrap>
      <List>
        {advert.reviews.map(
          ({ reviewer_name, reviewer_rating, comment }, index) => (
            <Item key={`${reviewer_name}-${index}`}>
              <Box>
                <FirstLetter>{firstNameLetter(reviewer_name)}</FirstLetter>
                <Wrap>
                  <Name>{reviewer_name}</Name>
                  <ReviewRating reviewer_rating={reviewer_rating} />
                </Wrap>
              </Box>
              <Text>{comment}</Text>
            </Item>
          )
        )}
      </List>
      <BookingForm />
    </ReviewsWrap>
  );
};

export default Reviews;
