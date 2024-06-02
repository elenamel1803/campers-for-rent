import { useState } from 'react';
import {
  CommentInput,
  Form,
  Input,
  InputsWrap,
  Text,
  Title,
} from './BookingForm.styled';

const INITIAL_STATE = {
  name: '',
  email: '',
  date: new Date(),
  comment: '',
};

const BookingForm = () => {
  const [state, setState] = useState('...INITIAL_STATE');

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;

    setState({
      ...state,
      [name]: newValue,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
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
          required
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
        />
        <Input
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          //   pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Email"
        />

        <Input
          type="date"
          name="date"
          value={date}
          required
          onChange={handleChange}
          placeholder="Booking date"
        />

        <CommentInput
          type="text"
          name="comment"
          value={comment}
          required
          onChange={handleChange}
          placeholder="Comment"
        />
      </InputsWrap>

      <button type="submit">Send</button>
    </Form>
  );
};

export default BookingForm;
