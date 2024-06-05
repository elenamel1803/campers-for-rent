import { useState } from 'react';
import { useSelector } from 'react-redux';
import Location from 'components/Location/Location';
import Equipment from 'components/Equipment/Equipment';
import Type from 'components/Type/Type';
import { SvgIcon } from 'helpers/svgIcon';
import {
  selectFiltersLocation,
  selectFiltersEquipment,
  selectFiltersType,
} from '../../redux/filters/filtersSelectors';
import { Button, CategoryText, FiltersWrap, Text } from './Filters.styled';

const Filters = ({ onSearch }) => {
  const currentLocation = useSelector(selectFiltersLocation);
  const currentEquipment = useSelector(selectFiltersEquipment);
  const currentType = useSelector(selectFiltersType);

  const [location, setLocation] = useState(currentLocation);
  const [equipment, setEquipment] = useState(currentEquipment);
  const [type, setType] = useState(currentType);

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ location, equipment, type });
  };

  return (
    <FiltersWrap onSubmit={handleSubmit}>
      <Location location={location} setLocation={setLocation} />
      <Text>Filters</Text>
      <CategoryText>Vehicle equipment</CategoryText>
      <SvgIcon
        id="icon-line_small"
        width="360"
        height="2"
        stroke="rgba(16, 24, 40, 0.1)"
      />
      <Equipment equipment={equipment} setEquipment={setEquipment} />
      <CategoryText>Vehicle type</CategoryText>
      <SvgIcon
        id="icon-line_small"
        width="360"
        height="2"
        stroke="rgba(16, 24, 40, 0.1)"
      />
      <Type type={type} setType={setType} />

      <Button type="submit">Search</Button>
    </FiltersWrap>
  );
};

export default Filters;
