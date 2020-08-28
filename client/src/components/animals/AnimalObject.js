import React, { useState, useContext, useEffect, Fragment } from 'react';
import Modal from '../layout/Modal';
import AnimalContext from '../../context/animal/animalContext';
import AuthContext from '../../context/auth/authContext';

const AnimalObject = ({ animal }) => {
  const {
    _id,
    name,
    age,
    temperament,
    image,
    // in_foster,
    // adopted,
    // available,
    // user,
  } = animal;

  const animalContext = useContext(AnimalContext);
  const { updateAnimal } = animalContext;

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    confirmFoster();
  }, []);

  const confirmFoster = () => {
    animal.user = user._id;
    animal.in_foster = true;
    animal.available = false;
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(`showModal is now ${showModal}`);
  };

  return (
    <Fragment>
      <div className='card text-center bg-light'>
        <img
          src={image}
          alt=''
          className='animal-img'
          style={{ width: '150px' }}
        />
        <h2 style={{ color: '#70964a' }}>{name}</h2>
        <p>{age}</p>
        <p>{temperament}</p>
        <button className='btn modal_opener' onClick={toggleModal}>
          {animal.available ? 'Foster me!' : 'Menu'}
        </button>
      </div>

      <Modal
        show={showModal}
        closeCallback={toggleModal}
        customClass='custom_modal_class'
      >
        <Fragment>
          <h2>Hi!!</h2>
          <button className='btn' onClick={() => updateAnimal(animal)}>
            Update Animal
          </button>
        </Fragment>
      </Modal>
    </Fragment>

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
