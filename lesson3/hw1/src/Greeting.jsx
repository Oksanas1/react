import React from 'react';
import moment from 'moment';


const countYearsOld = birthDate => {
  return moment().diff(birthDate, 'years');
};

function Greeting(props) {
  console.log(props)
  return (
    <div className="greeting">My name is { props.firstName } { props.lastName }. I am { countYearsOld(props.birthDate) } years old</div>
  );
}

export default Greeting;
