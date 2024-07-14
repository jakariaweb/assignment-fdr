import React from 'react';
import {SvgXml} from 'react-native-svg';

const ErrorCircleIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_104)">
<path d="M10 20C15.5225 20 20 15.5225 20 10C20 4.4775 15.5225 0 10 0C4.4775 0 0 4.4775 0 10C0 15.5225 4.4775 20 10 20ZM11.25 11.25C11.25 11.94 10.69 12.5 10 12.5C9.31 12.5 8.75 11.94 8.75 11.25V5C8.75 4.31 9.31 3.75 10 3.75C10.69 3.75 11.25 4.31 11.25 5V11.25ZM10 13.73C10.69 13.73 11.25 14.29 11.25 14.98C11.25 15.67 10.69 16.23 10 16.23C9.31 16.23 8.75 15.67 8.75 14.98C8.75 14.29 9.31 13.73 10 13.73Z" fill=${color}/>
</g>
<defs>
<clipPath id="clip0_1_104">
<rect width=${width} height=${height} fill=${color}/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};

export {ErrorCircleIcon};
