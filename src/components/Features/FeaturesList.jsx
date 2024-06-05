import { capitalizeText } from '../../helpers/capitalizedText';
import { SvgIcon } from '../../helpers/svgIcon';
import Air from '../../assets/img/air.svg';
import { Item, List } from './Features.styled';

const FeaturesList = ({ advert }) => {
  const { adults, transmission, engine, details } = advert;

  const {
    airConditioner,
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
    <List>
      {adults > 0 && (
        <Item>
          <SvgIcon id="icon-users" />
          {adults} adults
        </Item>
      )}
      <Item>
        <SvgIcon id="icon-transmission" fill="none" stroke="var(--main)" />
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
          <SvgIcon id="icon-kitchen" fill="none" stroke="var(--main)" />
          kitchen
        </Item>
      )}
      {beds > 0 && (
        <Item>
          <SvgIcon id="icon-beds" fill="none" stroke="var(--main)" />
          {beds} beds
        </Item>
      )}
      {airConditioner > 0 && (
        <Item>
          <SvgIcon id="icon-airConditioner" fill="none" stroke="var(--main)" />
          {airConditioner} Air conditioner
        </Item>
      )}
      {CD > 0 && (
        <Item>
          <SvgIcon id="icon-cd" fill="none" stroke="var(--main)" />
          CD
        </Item>
      )}
      {TV > 0 && (
        <Item>
          <SvgIcon id="icon-tv" fill="none" stroke="var(--main)" />
          TV
        </Item>
      )}
      {radio > 0 && (
        <Item>
          <SvgIcon id="icon-radio" fill="none" stroke="var(--main)" />
          Radio
        </Item>
      )}
      {hob > 0 && (
        <Item>
          <SvgIcon id="icon-hob" fill="none" stroke="var(--main)" />
          {hob} hob
        </Item>
      )}
      {toilet > 0 && (
        <Item>
          <SvgIcon id="icon-toilet" fill="var(--main)" />
          Toilet
        </Item>
      )}
      {shower > 0 && (
        <Item>
          <SvgIcon id="icon-shower" fill="none" stroke="var(--main)" />
          Shower
        </Item>
      )}
      {freezer > 0 && (
        <Item>
          <SvgIcon id="icon-freezer" fill="none" stroke="var(--main)" />
          Freezer
        </Item>
      )}
      {microwave > 0 && (
        <Item>
          <SvgIcon id="icon-microwave" fill="none" stroke="var(--main)" />
          Microwave
        </Item>
      )}
      {gas !== '' && (
        <Item>
          <SvgIcon id="icon-gas" fill="var(--main)" />
          Gas
        </Item>
      )}
      {water !== '' && (
        <Item>
          <SvgIcon id="icon-water" fill="none" stroke="var(--main)" />
          Water
        </Item>
      )}
    </List>
  );
};

export default FeaturesList;
