import React from 'react';
import moment from 'moment';


const fromatDate = birthDate => {
  return moment(birthDate).format("DD MMM YY");
};

function Profile(props) {
  console.log(props)
  return (
    <div className="profile">
      <h1 className='profile__name'>{ props.userData.firstName } { props.userData.lastName }</h1>
      <p className='profile__birth'>'Was born { fromatDate(props.userData.birthDate) } in { props.userData.birthPlace }'</p>
    </div>
  );
}

export default Profile;
