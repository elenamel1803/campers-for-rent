import { useState } from 'react';
import {
  ErrorMessage,
  Form,
  Input,
  InputsWrap,
  SendButton,
  Text,
  Textarea,
  Title,
} from './BookingForm.styled';
import { validate } from '../../helpers/validateBookingForm';

const INITIAL_STATE = {
  name: '',
  email: '',
  date: new Date(),
  comment: '',
};

const BookingForm = () => {
  const [state, setState] = useState('{...INITIAL_STATE}');
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate({ state, setErrors })) {
      reset();
    }
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const { name, email, date, comment } = state;

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Book your campervan now</Title>
      <Text>Stay connected! We are always ready to help you.</Text>
      <InputsWrap>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <Input
          type="date"
          name="date"
          value={date}
          onChange={handleChange}
          placeholder="Booking date"
        />
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
        <Textarea
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="Comment"
        />
        {errors.comment && <ErrorMessage>{errors.comment}</ErrorMessage>}
      </InputsWrap>

      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};

export default BookingForm;
