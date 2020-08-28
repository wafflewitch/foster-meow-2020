import React, { Fragment, useContext, useEffect } from 'react';
import AnimalObject from '../../components/animals/AnimalObject';
import AnimalContext from '../../context/animal/animalContext';

const AnimalsAvailable = () => {
  const animalContext = useContext(AnimalContext);

  const {
    animalsAvailable,
    getAnimalsAvailable,
    // animalsStatic,
  } = animalContext;

  // console.log(animalsStatic);

  useEffect(() => {
    getAnimalsAvailable();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2>Animals Available for Fostering</h2>
      <div className='container'>
        <div style={animalCardStyle}>
          {animalsAvailable.length > 0 ? (
            animalsAvailable.map((animal) => (
              <AnimalObject key={animal._id} animal={animal} />
            ))
          ) : (
            <h3>There are no animals available at this time.</h3>
          )}
        </div>
      </div>
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <h2>Animals Available for Fostering</h2>
  //     <div className='container'>
  //       <div style={animalCardStyle}>
  //         {animalsStatic.length > 0 ? (
  //           animalsStatic.map((animal) => (
  //             <AnimalObject key={animal.id} animal={animal} />
  //           ))
  //         ) : (
  //           <h3>There are no animals available at this time.</h3>
  //         )}
  //       </div>
  //     </div>
  //   </Fragment>
  // );
};

const animalCardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default AnimalsAvailable;
