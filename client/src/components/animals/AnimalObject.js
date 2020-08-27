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

    // <div className='row'>
    //   <div className='col s12 m6'>
    //     <div className='card'>
    //       <div className='card-image'>
    //         <img src={animal.image} />
    //         <span className='card-title'>{animal.name}</span>
    //         <a
    //           href='#'
    //           className='btn-floating halfway-fab waves-effect waves-light light-green'
    //         ></a>
    //       </div>
    //       <div className='card-content'>
    //         <p>{animal.age}</p>
    //         <p>{animal.temperament}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AnimalObject;
