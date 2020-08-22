import React from 'react';

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
    <div className='card text-center bg-light'>
      <img
        src={animal.image}
        alt=''
        className='animal-img'
        style={{ width: '150px' }}
      />
      <h2 style={{ color: '#70964a' }}>{animal.name}</h2>
      <p>{animal.age}</p>
      <p>{animal.temperament}</p>
    </div>
  );
};

export default AnimalObject;
