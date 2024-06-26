import { SvgIcon } from 'helpers/svgIcon';
import Air from '../../assets/img/air.svg';
import { CheckboxCustom, Img, Input, Wrap } from './Equipment.styled';

const Equipment = ({ equipment, setEquipment }) => {
  const equipmentOptions = [
    { id: 'transmission', label: 'Automatic', icon: 'icon-transmission' },
    { id: 'kitchen', label: 'Kitchen', icon: 'icon-kitchen' },
    { id: 'TV', label: 'TV', icon: 'icon-tv' },
    { id: 'shower', label: 'Shower/WC', icon: 'icon-shower' },
  ];

  const handleChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setEquipment([...equipment, value]);
    } else {
      setEquipment(equipment.filter(item => item !== value));
    }
  };

  return (
    <Wrap>
      <label>
        <Input
          type="checkbox"
          value={'airConditioner'}
          checked={equipment.includes('airConditioner')}
          onChange={handleChange}
        />
        <CheckboxCustom>
          <Img src={Air} alt="Air" /> AC
        </CheckboxCustom>
      </label>
      {equipmentOptions.map(option => (
        <label key={option.id}>
          <Input
            type="checkbox"
            value={option.id}
            checked={equipment.includes(option.id)}
            onChange={handleChange}
          />
          <CheckboxCustom>
            <SvgIcon
              id={option.icon}
              width="28"
              height="28"
              fill="none"
              stroke="var(--main)"
            />
            {option.label}
          </CheckboxCustom>
        </label>
      ))}
    </Wrap>
  );
};

export default Equipment;
