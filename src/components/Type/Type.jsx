import { SvgIcon } from 'helpers/svgIcon';
import { Input, RadioCustom, Wrap } from './Type.styled';

const Type = ({ type, setType }) => {
  const typeOptions = [
    { id: 'panelTruck', label: 'Van', icon: 'icon-Van' },
    { id: 'fullyIntegrated', label: 'Fully Integrated', icon: 'icon-Fully' },
    { id: 'alcove', label: 'Alcove', icon: 'icon-Alcove' },
  ];

  const handleChange = e => {
    setType(e.target.value);
  };

  return (
    <Wrap>
      {typeOptions.map(option => (
        <label key={option.id}>
          <Input
            type="radio"
            value={option.id}
            checked={type === option.id}
            onChange={handleChange}
          />
          <RadioCustom>
            <SvgIcon id={option.icon} width="40" height="28" />
            {option.label}
          </RadioCustom>
        </label>
      ))}
    </Wrap>
  );
};

export default Type;
