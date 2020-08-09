import React from 'react';
import PropTypes from 'prop-types';

const AnimalObject = ({ animal }) => {
  const {
    _id,
    name,
    age,
    temperament,
    image,
    in_foster,
    adopted,
    available,
    user,
  } = animal;

  return (
    <div className='card bg-light'>
      <img
        src={animal.image}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <p>{animal.name}</p>
      <p>{animal.age}</p>
      <p>{animal.temperament}</p>
    </div>
  );
};

AnimalObject.propTypes = {
  animal: PropTypes.object.isRequired,
};

export default AnimalObject;
