import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="128"
      height="128"
      viewBox="0 0 128 128"
      style={{ MsTransform: "rotate(360deg)" }}
      transform="rotate(360)"
    >
      <radialGradient
        id="a"
        cx="63.138"
        cy="96.922"
        r="57.66"
        gradientTransform="matrix(1.0146 0 0 .5359 -.058 40.312)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fff"></stop>
        <stop offset="1" stopColor="#E3E3E3"></stop>
      </radialGradient>
      <ellipse cx="64" cy="92.25" fill="url(#a)" rx="59.44" ry="31"></ellipse>
      <g opacity="0.49">
        <linearGradient
          id="b"
          x1="63.125"
          x2="63.125"
          y1="76.604"
          y2="106.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.212" stopColor="#E2E2E2"></stop>
          <stop offset="0.559" stopColor="#B8B8B8"></stop>
          <stop offset="0.832" stopColor="#9E9E9E"></stop>
          <stop offset="0.995" stopColor="#949494"></stop>
        </linearGradient>
        <path
          fill="url(#b)"
          d="M99.51 89.1c0 9.86-16.29 18.9-36.38 18.9s-36.38-9.05-36.38-18.9 16.29-17.85 36.38-17.85 36.38 7.99 36.38 17.85z"
        ></path>
      </g>
      <path
        fill="#424242"
        d="M64 64.25c15.4 0 29.84 3.1 40.64 8.74 10.19 5.31 15.8 12.15 15.8 19.26s-5.61 13.95-15.8 19.26c-10.81 5.64-25.24 8.74-40.64 8.74s-29.84-3.1-40.64-8.74c-10.19-5.31-15.8-12.15-15.8-19.26s5.61-13.95 15.8-19.26c10.8-5.64 25.24-8.74 40.64-8.74m0-3c-32.83 0-59.44 13.88-59.44 31s26.61 31 59.44 31 59.44-13.88 59.44-31-26.61-31-59.44-31z"
        opacity="0.2"
      ></path>
      <radialGradient
        id="c"
        cx="62.548"
        cy="66.739"
        r="42.384"
        gradientTransform="matrix(1 0 0 .9815 0 .633)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.005" stopColor="#fff"></stop>
        <stop offset="0.276" stopColor="#FBFBFB"></stop>
        <stop offset="0.565" stopColor="#eee"></stop>
        <stop offset="0.861" stopColor="#D9D9D9"></stop>
        <stop offset="1" stopColor="#ccc"></stop>
      </radialGradient>
      <path
        fill="url(#c)"
        d="M113.95 56.17c-3.52-.78-9.05-.45-13.25 1.19.13-4.64-.22-7.71-.22-7.71l-37.97-.05-37.85.03s-5.52 50.76 37.85 50.76c14.81 0 23.94-5.83 29.54-13.54 21.36-3.75 27.61-13.17 29.06-19.55 1.47-6.49-2.97-10.2-7.16-11.13zm.5 12.08c-.55 1.08-5.74 8.17-15.87 9.02 0 0 3.61-15.5 11.16-15.65 7.54-.15 5.26 5.55 4.71 6.63z"
      ></path>
      <linearGradient
        id="d"
        x1="62.637"
        x2="62.637"
        y1="28.365"
        y2="53.127"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.005" stopColor="#fff"></stop>
        <stop offset="0.276" stopColor="#FBFBFB"></stop>
        <stop offset="0.565" stopColor="#eee"></stop>
        <stop offset="0.861" stopColor="#D9D9D9"></stop>
        <stop offset="1" stopColor="#ccc"></stop>
      </linearGradient>
      <path
        fill="url(#d)"
        d="M100.73 51.75c0 9.71-17.1 17.59-38.2 17.59s-37.99-7.91-37.99-17.63 16.89-17.55 37.99-17.55 38.2 7.87 38.2 17.59z"
      ></path>
      <path
        fill="#424242"
        d="M62.48 37.64c20.6 0 33.4 6.53 35.07 12.72.08.49.16 1.14.16 1.35 0 .27-.06 3.4-.11 5.31-.03 1.01.45 1.96 1.28 2.54.51.36 1.12.55 1.73.55.37 0 .74-.07 1.1-.21 2.25-.88 5.16-1.39 7.98-1.39 1.32 0 2.53.11 3.51.33 1.8.4 3.39 1.45 4.26 2.82.83 1.3 1.03 2.91.61 4.78-1.11 4.93-6.04 13.74-26.61 17.38-.77.14-1.46.57-1.91 1.2-5.94 8.23-15.04 12.4-27.06 12.4-10.31 0-18.48-3.04-24.28-9.05C27.82 77.65 27.26 60.08 27.5 53.02v-.16c-.03-1.42.08-2.38.11-2.68 1.96-7.16 16.89-12.54 34.87-12.54m0-3c-19.53 0-35.56 5.89-37.81 14.95 0 0-.21 1.25-.17 3.33-.37 10.76.88 47.52 37.96 47.52 14.79 0 23.91-5.89 29.5-13.65 21.33-3.77 27.58-13.26 29.02-19.68 1.46-6.51-2.96-10.26-7.15-11.19-1.2-.27-2.63-.4-4.16-.4-2.97 0-6.31.51-9.07 1.6.05-1.86.11-5.09.11-5.39 0-.65-.22-1.97-.22-1.97-2.24-9.06-18.48-15.12-38.01-15.12z"
        opacity="0.2"
      ></path>
      <defs>
        <path
          id="e"
          d="M99.92 51.75c0 9.41-16.96 16.31-37.39 16.31s-37.57-6.9-37.57-16.31S42.1 34.71 62.53 34.71s37.39 7.63 37.39 17.04z"
        ></path>
      </defs>
      <clipPath id="g">
        <use xlinkHref="#e"></use>
      </clipPath>
      <linearGradient
        id="f"
        x1="62.53"
        x2="62.53"
        y1="46.75"
        y2="74.84"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#7B402B"></stop>
        <stop offset="0.094" stopColor="#6F3A28"></stop>
        <stop offset="0.504" stopColor="#3F241A"></stop>
        <stop offset="0.818" stopColor="#211611"></stop>
        <stop offset="0.995" stopColor="#16110E"></stop>
      </linearGradient>
      <ellipse
        cx="62.53"
        cy="60.9"
        fill="url(#f)"
        clip-path="url(#g)"
        rx="32.72"
        ry="15.07"
      ></ellipse>
      <path
        fill="#D7CCC8"
        d="M52.9 44.44c-1.02 3.4 2.24 7.19 4.22 8.99.22.2.04.56-.24.49-2.43-.61-6.75-1.75-8.31-6.56-.94-2.88.44-6.02 3.08-10.55 1.55-2.7 2.28-5.2 2.49-8.14.24-3.06-.53-5.36-1.83-6.89-.21-.24.04-.6.32-.45 2.27 1.22 4.87 3.51 5.51 7.19 0 .01 0 .02.01.04.65 6.38-3.41 9.71-5.25 15.88zM66.09 43.1c-2.44 5.07 1.71 11.79 4.35 15.1.29.37-.08.89-.5.71-3.65-1.55-10.11-4.42-11.35-12.32-.74-4.73 2.19-9.29 7.45-15.72 3.1-3.84 4.87-7.56 5.92-12.11 1.14-4.72.52-8.51-1.14-11.23-.26-.43.22-.92.61-.62 3.24 2.48 6.74 6.71 6.81 12.62v.06c-.56 10.14-7.72 14.33-12.15 23.51z"
        opacity="0.58"
      ></path>
      <path
        fill="#fff"
        d="M64.05 117.17c-21.24 0-41.55-3.67-50.12-12.45 7.76 9.03 27.27 15.45 50.12 15.45s42.36-6.41 50.12-15.45c-11.5 8.45-28.88 12.45-50.12 12.45z"
      ></path>
      <path fill="rgba(0, 0, 0, 0)" d="M0 0H128V128H0z"></path>
    </svg>
  );
}