import { formattedValue } from '../../helpers/formattedValue';
import { DetailsItem, DetailsListWrap } from './Features.styled';

const DetailsList = ({ advert }) => {
  const { form, length, width, height, tank, consumption } = advert;

  return (
    <DetailsListWrap>
      <DetailsItem>
        <p>Form</p>
        <span>{form}</span>
      </DetailsItem>
      <DetailsItem>
        <p>Length</p>
        <span>{formattedValue(length)}</span>
      </DetailsItem>
      <DetailsItem>
        <p>Width</p>
        <span>{formattedValue(width)}</span>
      </DetailsItem>
      <DetailsItem>
        <p>Height</p>
        <span>{formattedValue(height)}</span>
      </DetailsItem>
      <DetailsItem>
        <p>Tank</p>
        <span>{formattedValue(tank)}</span>
      </DetailsItem>
      <DetailsItem>
        <p>Consumption</p>
        <span>{consumption}</span>
      </DetailsItem>
    </DetailsListWrap>
  );
};

export default DetailsList;
