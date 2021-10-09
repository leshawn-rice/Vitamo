import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon';

const Profile = ({ isActive = true }) => {
  return (
    <Icon isActive={isActive} icon={faUser} />
  );
}

export default Profile;
