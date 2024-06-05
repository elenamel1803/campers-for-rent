import { SvgIcon } from '../../helpers/svgIcon';
import { capitalizeText } from '../../helpers/capitalizedText';
import Air from '../../assets/img/air.svg';
import { DetailsItem, DetailsList } from './AdvertDetails.styled';

const AdvertDetails = ({
  adults,
  transmission,
  engine,
  kitchen,
  beds,
  airConditioner,
}) => {
  return (
    <DetailsList>
      {adults > 0 && (
        <DetailsItem>
          <SvgIcon id="icon-users" />
          {adults} adults
        </DetailsItem>
      )}
      <DetailsItem>
        <SvgIcon id="icon-transmission" fill="none" stroke="var(--main)" />
        {capitalizeText(transmission)}
      </DetailsItem>
      <DetailsItem>
        <SvgIcon id="icon-engine" />
        {capitalizeText(engine)}
      </DetailsItem>
      {kitchen > 0 && (
        <DetailsItem>
          <SvgIcon id="icon-kitchen" fill="none" stroke="var(--main)" />
          Kitchen
        </DetailsItem>
      )}
      {beds > 0 && (
        <DetailsItem>
          <SvgIcon id="icon-beds" fill="none" stroke="var(--main)" />
          {beds} beds
        </DetailsItem>
      )}
      {airConditioner > 0 && (
        <DetailsItem>
          <img src={Air} alt="Air" />
          AC
        </DetailsItem>
      )}
    </DetailsList>
  );
};
export default AdvertDetails;
