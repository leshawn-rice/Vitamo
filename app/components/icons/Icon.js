// External Dependencies
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// Styles
import { primaryColor, darkColor } from '../../styles/utils';

const Icon = ({ isActive = false, icon = null }) => {
  const [iconSize, setIconSize] = useState(null);
  const [iconColor, setIconColor] = useState(darkColor);

  useEffect(() => {
    isActive ? setIconColor(primaryColor) : setIconColor(darkColor);
    setIconSize(15);
  }, []);

  return (
    // add style to this component
    <View>
      <FontAwesomeIcon icon={icon} size={iconSize} color={iconColor} />
    </View>
  );

}

export default Icon;
