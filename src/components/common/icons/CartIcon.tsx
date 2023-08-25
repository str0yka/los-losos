import React from 'react';

interface CartIconProps extends React.ComponentProps<'svg'> {}

export const CartIcon: React.FC<CartIconProps> = ({ ...svgProps }) => (
  <svg
    {...svgProps}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1161 6.63434C14.9427 6.41582 14.6789 6.30474 14.3998 6.30474H14.1765C14.1065 6.07617 13.9392 5.63251 13.688 5.39182C13.3593 5.07639 12.9257 4.90565 12.4716 4.91068C11.6412 4.92851 10.9614 5.61925 10.8275 6.30497H10.0988L11.1369 2.79228C11.1392 2.78474 11.1415 2.76394 11.1431 2.75617C11.227 2.40759 11.1687 2.04051 10.9785 1.73445C10.7833 1.41994 10.4739 1.19777 10.1072 1.11502C9.36711 0.948165 8.62219 1.39799 8.45305 2.09971L7.92619 3.88554C7.44437 3.50748 6.84848 3.32325 6.23362 3.36714C5.57899 3.41537 4.98242 3.74131 4.55362 4.23822C4.05922 4.81079 3.86836 5.61948 4.00048 6.30519H1.59979C1.32071 6.30519 1.05694 6.41971 0.883679 6.63822C0.710422 6.85674 0.645965 7.13582 0.709507 7.40759L2.30951 14.2746C2.40596 14.6883 2.77511 14.9909 3.20002 14.9909H12.8C13.2249 14.9909 13.5939 14.6851 13.6905 14.2714L15.2905 7.42062C15.3536 7.14817 15.2896 6.85285 15.1161 6.63434ZM12.4912 5.85217C12.7011 5.84211 12.9031 5.93788 13.0558 6.08394C13.1193 6.14497 13.1685 6.30474 13.208 6.30474H11.7747C11.8901 6.07617 12.166 5.85879 12.4912 5.85217ZM9.33602 2.36028C9.39431 2.11937 9.65099 1.95982 9.90562 2.01582C10.0316 2.04439 10.1367 2.11159 10.2021 2.21651C10.2601 2.31022 10.2793 2.44234 10.2565 2.54817L9.14471 6.30474H8.18128L9.33602 2.36028ZM5.24596 4.83479C5.51522 4.52279 5.88985 4.32119 6.30082 4.29102C6.71248 4.25971 7.10996 4.38611 7.42174 4.65537C7.49419 4.71777 7.58059 4.77605 7.66928 4.78611L7.22814 6.30474H4.93625C4.78745 5.84759 4.89831 5.23754 5.24596 4.83479ZM14.352 7.21902L14.1452 8.13331H1.81305L1.59979 7.21902H14.352ZM12.7998 14.0762H3.19979L1.91979 8.59045H14.0416L12.7998 14.0762Z"
      fill="black"
    />
    <path
      d="M5.21936 9.82387C5.09502 9.84467 5.01067 9.96262 5.03147 10.087L5.48862 12.8298C5.50736 12.9416 5.60404 13.0209 5.71376 13.0209C5.7261 13.0209 5.7389 13.02 5.7517 13.0177C5.87604 12.9969 5.96016 12.8792 5.93959 12.7548L5.48244 10.012C5.46164 9.88764 5.34462 9.80239 5.21936 9.82387Z"
      fill="black"
    />
    <path
      d="M10.7798 9.82382C10.6545 9.80164 10.5373 9.88713 10.5169 10.0119L10.0598 12.7548C10.039 12.8791 10.1231 12.9971 10.2477 13.0176C10.2605 13.0199 10.2728 13.0208 10.2854 13.0208C10.3951 13.0208 10.492 12.9415 10.5105 12.8298L10.9677 10.0869C10.9885 9.96279 10.9044 9.84462 10.7798 9.82382Z"
      fill="black"
    />
    <path
      d="M7.67584 9.77673C7.54967 9.77673 7.44727 9.8789 7.44727 10.0055V12.7484C7.44727 12.8748 7.54967 12.977 7.67584 12.977C7.80201 12.977 7.90441 12.8748 7.90441 12.7484V10.0055C7.90441 9.87913 7.80201 9.77673 7.67584 9.77673Z"
      fill="black"
    />
  </svg>
);