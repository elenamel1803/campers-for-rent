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
import { SvgIcon } from 'helpers/svgIcon';
import Air from '../../assets/img/Air.svg';

const Features = ({ advert }) => {
  const {
    adults,
    // children,
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
    // bathroom,
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
          {adults > 0 && (
            <Item>
              <SvgIcon id="icon-users" />
              {adults} adults
            </Item>
          )}
          {/* {children > 0 && (
            <Item>
              <SvgIcon id="icon-users" />
              {children} children
            </Item>
          )} */}
          <Item>
            <SvgIcon id="icon-transmission" fill="none" stroke="#101828" />
            {capitalizeText(transmission)}
          </Item>
          {airConditioner > 0 && (
            <Item>
              <img src={Air} alt="Air" />
              AC
            </Item>
          )}
          <Item>
            <SvgIcon id="icon-engine" />
            {capitalizeText(engine)}
          </Item>
          {kitchen > 0 && (
            <Item>
              <SvgIcon id="icon-kitchen" fill="none" stroke="#101828" />
              kitchen
            </Item>
          )}
          {/* {bathroom > 0 && (
            <Item>
              <SvgIcon id="icon-engine" />
              bathroom
            </Item>
          )} */}
          {beds > 0 && (
            <Item>
              <SvgIcon id="icon-beds" fill="none" stroke="#101828" />
              {beds} beds
            </Item>
          )}
          {airConditioner > 0 && (
            <Item>
              <SvgIcon id="icon-AirConditioner" fill="none" stroke="#101828" />
              {airConditioner} Air conditioner
            </Item>
          )}
          {CD > 0 && (
            <Item>
              <SvgIcon id="icon-CD" fill="none" stroke="#101828" />
              CD
            </Item>
          )}
          {TV > 0 && (
            <Item>
              <SvgIcon id="icon-TV" fill="none" stroke="#101828" />
              TV
            </Item>
          )}
          {radio > 0 && (
            <Item>
              <SvgIcon id="icon-Radio" fill="none" stroke="#101828" />
              Radio
            </Item>
          )}
          {hob > 0 && (
            <Item>
              <SvgIcon id="icon-hob" fill="none" stroke="#101828" />
              {hob} hob
            </Item>
          )}
          {toilet > 0 && (
            <Item>
              <SvgIcon id="icon-Toilet" fill="#101828" />
              Toilet
            </Item>
          )}
          {shower > 0 && (
            <Item>
              <SvgIcon id="icon-shower" fill="none" stroke="#101828" />
              Shower
            </Item>
          )}
          {freezer > 0 && (
            <Item>
              <SvgIcon id="icon-Freezer" fill="none" stroke="#101828" />
              Freezer
            </Item>
          )}
          {microwave > 0 && (
            <Item>
              <SvgIcon id="icon-Microwave" fill="none" stroke="#101828" />
              Microwave
            </Item>
          )}
          {gas !== '' && (
            <Item>
              <SvgIcon id="icon-Gas" fill="#101828" />
              Gas
            </Item>
          )}
          {water !== '' && (
            <Item>
              <SvgIcon id="icon-Water" fill="none" stroke="#101828" />
              Water
            </Item>
          )}
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
