import { useState } from 'react';
import Modal from 'components/Modal/Modal';

const AdvertCard = ({ advert }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);

  const {
    _id,
    gallery,
    name,
    price,
    rating,
    location,
    description,
    reviews,
    // details,
  } = advert;

  // console.log('details :>> ', details);

  return (
    <>
      <li id={_id}>
        <img src={gallery[0]} alt={name} width={290} height={310} />
        <h2>{name}</h2>
        <p>{price}</p>
        <p>
          {rating} ({reviews.length} Reviews)
        </p>
        <p>{location}</p>
        <p>{description}</p>
        <button type="button" onClick={toggleModal}>
          Show more
        </button>
      </li>
      {showModal && <Modal advert={advert} onClose={toggleModal} />}
    </>
  );
};

export default AdvertCard;
