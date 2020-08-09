import React, { useState, useContext } from 'react';
import AnimalContext from '../../context/animal/animalContext';

const AnimalForm = () => {
  const animalContext = useContext(AnimalContext);

  const { addAnimal } = animalContext;

  const [animal, setAnimal] = useState({
    name: '',
    age: '',
    temperament: '',
    image: '',
  });

  const { name, age, temperament, image } = animal;

  const onChange = (e) =>
    setAnimal({ ...animal, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addAnimal(animal);
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Animal</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Age'
        name='age'
        value={age}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Temperament'
        name='temperament'
        value={temperament}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Image'
        name='image'
        value={image}
        onChange={onChange}
      />
      <input type='hidden' name='in_foster' value='false' />
      <input type='hidden' name='adopted' value='false' />
      <div>
        <input
          type='submit'
          value='Add Animal'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default AnimalForm;
