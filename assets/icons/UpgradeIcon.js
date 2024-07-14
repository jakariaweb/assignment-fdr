import React from "react";
import { SvgXml } from "react-native-svg";

const UpgradeIcon = ({ width, height, color }) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.97715 1.00014C6.64041 1.00231 7.29664 1.13601 7.90789 1.39348C8.51913 1.65096 9.07324 2.0271 9.53815 2.50014H7.97715C7.84454 2.50014 7.71737 2.55282 7.6236 2.64658C7.52983 2.74035 7.47715 2.86753 7.47715 3.00014C7.47715 3.13275 7.52983 3.25992 7.6236 3.35369C7.71737 3.44746 7.84454 3.50014 7.97715 3.50014H10.0487C10.2949 3.50001 10.531 3.40214 10.7051 3.22804C10.8792 3.05394 10.977 2.81785 10.9772 2.57164V0.500138C10.9772 0.36753 10.9245 0.240353 10.8307 0.146585C10.7369 0.0528164 10.6098 0.000137982 10.4772 0.000137982C10.3445 0.000137982 10.2174 0.0528164 10.1236 0.146585C10.0298 0.240353 9.97715 0.36753 9.97715 0.500138V1.53914C9.15074 0.794864 8.13345 0.295343 7.0392 0.0965125C5.94496 -0.102318 4.81697 0.00739396 3.78154 0.413362C2.74612 0.81933 1.84416 1.50552 1.17666 2.3951C0.509156 3.28468 0.102473 4.34251 0.00215203 5.45014C-0.00430628 5.51977 0.00380992 5.58998 0.0259835 5.6563C0.0481571 5.72262 0.0839018 5.78359 0.13094 5.83533C0.177979 5.88707 0.235279 5.92845 0.299191 5.95682C0.363103 5.9852 0.432225 5.99995 0.502152 6.00014C0.624446 6.0017 0.742919 5.95756 0.834381 5.87636C0.925843 5.79516 0.983709 5.68276 0.996652 5.56114C1.10796 4.31651 1.68064 3.15849 2.60219 2.31456C3.52375 1.47062 4.72756 1.00178 5.97715 1.00014Z" fill=${color}/>
<path d="M11.453 6.00004C11.3307 5.99848 11.2123 6.04262 11.1208 6.12382C11.0293 6.20501 10.9715 6.31742 10.9585 6.43904C10.8759 7.39066 10.522 8.2986 9.93886 9.05514C9.35573 9.81169 8.56782 10.3851 7.66861 10.7073C6.7694 11.0295 5.79664 11.0871 4.86571 10.8731C3.93479 10.6591 3.08479 10.1826 2.41654 9.50004H3.97754C4.11015 9.50004 4.23732 9.44736 4.33109 9.35359C4.42486 9.25983 4.47754 9.13265 4.47754 9.00004C4.47754 8.86743 4.42486 8.74025 4.33109 8.64649C4.23732 8.55272 4.11015 8.50004 3.97754 8.50004H1.90604C1.78409 8.49997 1.66332 8.52395 1.55064 8.57058C1.43796 8.61722 1.33558 8.68561 1.24934 8.77184C1.16311 8.85808 1.09472 8.96046 1.04808 9.07314C1.00144 9.18582 0.977473 9.30659 0.977539 9.42854V11.5C0.977539 11.6326 1.03022 11.7598 1.12399 11.8536C1.21775 11.9474 1.34493 12 1.47754 12C1.61015 12 1.73732 11.9474 1.83109 11.8536C1.92486 11.7598 1.97754 11.6326 1.97754 11.5V10.461C2.80395 11.2053 3.82125 11.7048 4.91549 11.9037C6.00973 12.1025 7.13773 11.9928 8.17315 11.5868C9.20857 11.1808 10.1105 10.4947 10.778 9.60508C11.4455 8.7155 11.8522 7.65767 11.9525 6.55004C11.959 6.48041 11.9509 6.4102 11.9287 6.34388C11.9065 6.27756 11.8708 6.21659 11.8238 6.16485C11.7767 6.1131 11.7194 6.07173 11.6555 6.04335C11.5916 6.01498 11.5225 6.00023 11.4525 6.00004H11.453Z" fill=${color}/>
</svg>
`}
    />
  );
};

export { UpgradeIcon };