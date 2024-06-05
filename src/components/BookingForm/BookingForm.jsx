import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { validate } from '../../helpers/validateBookingForm';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarIcon,
  CalendarWrapper,
  ErrorMessage,
  Form,
  Input,
  InputsWrap,
  SendButton,
  Text,
  Textarea,
  Title,
} from './BookingForm.styled';
import { SvgIcon } from 'helpers/svgIcon';
// import Calendar from 'components/Calendar/Calendar';

const INITIAL_STATE = {
  name: '',
  email: '',
  date: null,
  comment: '',
};

const BookingForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleDateChange = date => {
    setState({
      ...state,
      date,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate({ state, setErrors })) {
      reset();
      window.location.reload();
    }
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const { name, email, date, comment } = state;

  const CustomInput = React.forwardRef(({ value, onClick, onChange }, ref) => (
    <Input
      ref={ref}
      onClick={onClick}
      onChange={onChange}
      value={value}
      placeholder="Booking date"
    />
  ));

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

        <CalendarWrapper>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            dateFormat="dd.MM.yyyy"
            popperClassName="react-datepicker-popper"
            minDate={new Date()}
          />
          <CalendarIcon>
            <SvgIcon
              id="icon-calendar"
              fill="none"
              stroke="var(--main)"
              width="20"
              height="20"
            />
          </CalendarIcon>
        </CalendarWrapper>
        {errors.date && <ErrorMessage>{errors.date}</ErrorMessage>}
        <Textarea
          type="text"
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="Comment"
        />
      </InputsWrap>

      <SendButton type="submit">Send</SendButton>
    </Form>
  );
};

export default BookingForm;
