import React from 'react';
import {SvgXml} from 'react-native-svg';

const UserFillIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.74997 5C2.36926 5 1.24997 3.88071 1.24997 2.5C1.24997 1.11929 2.36926 0 3.74997 0C5.13068 0 6.24997 1.11929 6.24997 2.5C6.24997 3.88071 5.13068 5 3.74997 5Z" fill=${color} />
<path d="M3.74998 5.83301C5.82009 5.83531 7.49767 7.51289 7.49998 9.58301C7.49998 9.81312 7.31343 9.99967 7.08332 9.99967H0.416657C0.18654 9.99967 -3.33786e-06 9.81312 -3.33786e-06 9.58301C0.00228214 7.51289 1.67986 5.83529 3.74998 5.83301Z" fill=${color}/>
</svg>

`}
    />
  );
};

export {UserFillIcon};
