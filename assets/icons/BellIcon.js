import React from 'react';
import {SvgXml} from 'react-native-svg';

const BellIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.12603 9.485L1.43625 4.73824C1.82028 3.34764 2.65493 2.1262 3.80751 1.26808C4.96008 0.409953 6.36445 -0.035605 7.79737 0.00222466C9.2303 0.0400544 10.6095 0.559101 11.7159 1.47686C12.8222 2.39462 13.5922 3.65842 13.9033 5.06738L14.9177 9.66068C15.0297 10.1682 15.0271 10.6946 14.9101 11.201C14.7931 11.7074 14.5646 12.1809 14.2415 12.5865C13.9184 12.992 13.509 13.3194 13.0435 13.5443C12.5779 13.7692 12.0682 13.886 11.5518 13.886H10.7836C10.6253 14.6708 10.2025 15.3764 9.58666 15.8832C8.97085 16.3901 8.19997 16.6669 7.40463 16.6669C6.60929 16.6669 5.83841 16.3901 5.2226 15.8832C4.60678 15.3764 4.18392 14.6708 4.02565 13.886H3.44777C2.91623 13.886 2.39188 13.7623 1.91568 13.5245C1.43948 13.2867 1.02432 12.9413 0.702648 12.5152C0.380974 12.0891 0.161489 11.5939 0.0613432 11.0682C-0.0388031 10.5426 -0.0162106 10.0007 0.12603 9.485ZM7.40463 15.2747C7.83097 15.2729 8.24636 15.1386 8.59396 14.89C8.94156 14.6414 9.2044 14.2907 9.34651 13.886H5.46275C5.60486 14.2907 5.8677 14.6414 6.2153 14.89C6.5629 15.1386 6.97828 15.2729 7.40463 15.2747ZM1.80104 11.6744C1.9932 11.9311 2.24215 12.1391 2.52813 12.2819C2.81412 12.4248 3.12924 12.4985 3.44846 12.4972H11.5518C11.8616 12.4972 12.1674 12.4271 12.4467 12.2921C12.7259 12.1571 12.9715 11.9607 13.1653 11.7174C13.3591 11.474 13.4962 11.19 13.5664 10.8861C13.6366 10.5823 13.6381 10.2665 13.5709 9.96204L12.5572 5.36804C12.3129 4.26135 11.7081 3.26867 10.8392 2.5478C9.97017 1.82693 8.88681 1.41924 7.7613 1.38955C6.63579 1.35986 5.53272 1.70987 4.62745 2.38394C3.72217 3.058 3.06665 4.01744 2.76508 5.10973L1.45487 9.85649C1.36829 10.1657 1.3545 10.4911 1.41459 10.8066C1.47468 11.1222 1.607 11.4193 1.80104 11.6744Z" fill=${color}/>
</svg>
`}
    />
  );
};

export {BellIcon};
