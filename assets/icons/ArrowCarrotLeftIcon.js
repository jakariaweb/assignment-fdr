import React from 'react';
import {SvgXml} from 'react-native-svg';
const ArrowCarrotLeftIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5313 16.6029L17.6119 22.6835C17.9775 23.0492 18.5719 23.0492 18.9375 22.6835C19.3031 22.3179 19.3031 21.7235 18.9375 21.3579L13.5169 15.9373L18.9375 10.5167C19.3031 10.151 19.3031 9.55665 18.9375 9.19103C18.5719 8.8254 17.9775 8.8254 17.6119 9.19103L11.5313 15.2717C11.3475 15.4554 11.2575 15.6954 11.2575 15.9373C11.2575 16.1792 11.3475 16.4192 11.5313 16.6029Z" fill=${color}/>
</svg>
`}
    />
  );
};

export {ArrowCarrotLeftIcon};
