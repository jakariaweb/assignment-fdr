import React from "react";
import { SvgXml } from "react-native-svg";

const WalletIcon2 = ({ width, height, color }) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 2H2.5C2.0705 2 1.664 1.814 1.3825 1.5005C1.6575 1.1935 2.057 1 2.5 1H11.5C12.154 0.997 12.1535 0.0025 11.5 0H2.5C1.1195 0 0 1.1195 0 2.5V7.5C0 8.8805 1.1195 10 2.5 10H10.5C11.3285 10 12 9.3285 12 8.5V3.5C12 2.6715 11.3285 2 10.5 2ZM10 6.5C9.346 6.497 9.346 5.503 10 5.5C10.654 5.503 10.654 6.497 10 6.5Z" fill=${color}/>
</svg>
`}
    />
  );
};

export { WalletIcon2 };
