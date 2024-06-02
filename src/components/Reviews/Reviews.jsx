import BookingForm from 'components/BookingForm/BookingForm';
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
          ({ reviewer_name, reviewer_rating, comment, index }) => (
            <Item key={index}>
              <Box>
                <FirstLetter>{firstNameLetter(reviewer_name)}</FirstLetter>
                <Wrap>
                  <Name>{reviewer_name}</Name>
                  <span>{reviewer_rating}</span>
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
