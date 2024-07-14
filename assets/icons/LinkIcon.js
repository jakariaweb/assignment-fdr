import React from "react";
import { SvgXml } from "react-native-svg";

const LinkIcon = ({ width, height, color }) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.94753 8.05256C3.65446 7.75998 3.65446 7.28437 3.94753 6.9918C4.2406 6.69873 4.71521 6.69873 5.00827 6.9918C5.67142 7.65496 6.82869 7.65546 7.49184 6.9918L9.98691 4.4967C10.6716 3.81204 10.6716 2.69777 9.98691 2.01311C9.30226 1.32844 8.188 1.32844 7.50335 2.01311C7.21028 2.30618 6.73567 2.30618 6.4426 2.01311C6.14953 1.72054 6.14953 1.24492 6.4426 0.952353C7.71189 -0.317451 9.77837 -0.317451 11.0477 0.952353C12.3174 2.22216 12.3174 4.28765 11.0477 5.55746L8.55258 8.05256C7.91744 8.68771 7.08375 9.00478 6.25006 9.00478C5.41637 9.00478 4.58218 8.68721 3.94753 8.05256ZM3.25537 12C4.08906 12 4.92275 11.6824 5.5579 11.0478C5.85097 10.7552 5.85097 10.2796 5.5579 9.98702C5.26483 9.69395 4.79022 9.69395 4.49716 9.98702C3.812 10.6722 2.69774 10.6717 2.01359 9.98702C1.32893 9.30235 1.32893 8.18809 2.01359 7.50342L4.49465 5.02233C5.17981 4.33716 6.29407 4.33716 6.97822 5.02233C7.27129 5.3154 7.7459 5.3154 8.03897 5.02233C8.33203 4.72976 8.33203 4.25414 8.03897 3.96157C6.76918 2.69177 4.7037 2.69177 3.43391 3.96157L0.952343 6.44267C-0.317448 7.71247 -0.317448 9.77797 0.952343 11.0478C1.58749 11.6829 2.42168 12 3.25537 12Z" fill=${color}/>
</svg>
`}
    />
  );
};

export { LinkIcon };