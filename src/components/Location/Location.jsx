import { SvgIcon } from 'helpers/svgIcon';
import {
  IconWrapper,
  Input,
  InputWrapper,
  Label,
  Wrap,
} from './Location.styled';

const Location = ({ location, setLocation }) => {
  const handleChange = e => {
    setLocation(e.target.value);
  };

  return (
    <Wrap>
      <Label>Location</Label>
      <InputWrapper>
        <IconWrapper data-hastext={!!location}>
          <SvgIcon
            id="icon-map"
            width="18"
            height="20"
            fill="none"
            stroke={location ? '#101828' : 'rgba(16, 24, 40, 0.6)'}
          />
        </IconWrapper>
        <Input
          type="text"
          placeholder="City"
          value={location}
          onChange={handleChange}
        />
      </InputWrapper>
    </Wrap>
  );
};

export default Location;
