import BookingForm from 'components/BookingForm/BookingForm';
import {
  DetailsItem,
  DetailsList,
  FeaturesWrap,
  Item,
  List,
  Title,
} from './Features.styled';
import { formattedValue } from 'helpers/formattedValue';
import { capitalizeText } from 'helpers/capitalizedText';

const Features = ({ advert }) => {
  const {
    adults,
    children,
    transmission,
    engine,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = advert;

  const {
    airConditioner,
    bathroom,
    kitchen,
    beds,
    TV,
    CD,
    radio,
    shower,
    toilet,
    freezer,
    hob,
    microwave,
    gas,
    water,
  } = details;

  return (
    <FeaturesWrap>
      <div>
        <List>
          {adults > 0 && <Item>{adults} adults</Item>}
          {children > 0 && <Item> {children} children</Item>}
          <Item>{capitalizeText(transmission)}</Item>
          {airConditioner > 0 && <Item>AC</Item>}
          <Item>{capitalizeText(engine)}</Item>
          {kitchen > 0 && <Item>kitchen</Item>}
          {bathroom > 0 && <Item>bathroom</Item>}
          {beds > 0 && <Item>{beds} beds</Item>}
          {airConditioner > 0 && <Item>{airConditioner} Air conditioner</Item>}
          {CD > 0 && <Item>CD</Item>}
          {TV > 0 && <Item>TV</Item>}
          {radio > 0 && <Item>Radio</Item>}
          {hob > 0 && <Item>{hob} hob</Item>}
          {toilet > 0 && <Item>Toilet</Item>}
          {shower > 0 && <Item>Shower</Item>}
          {freezer > 0 && <Item>Freezer</Item>}
          {microwave > 0 && <Item>Microwave</Item>}
          {gas !== '' && <Item>Gas</Item>}
          {water !== '' && <Item>Water</Item>}
        </List>

        <Title>Vehicle details</Title>
        <DetailsList>
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
        </DetailsList>
      </div>
      <BookingForm />
    </FeaturesWrap>
  );
};

export default Features;
