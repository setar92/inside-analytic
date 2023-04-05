import { FC, useLayoutEffect, useState } from 'react';

const RateStarIcon: FC = () => {
  const [size, setSize] = useState([0]);

  function useWindowSize(): void {
    useLayoutEffect((): (() => void) => {
      function updateSize(): void {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  }
  useWindowSize();

  const fill = size[0] <= 480 ? '#767F95' : '#38415D';
  const width = size[0] <= 480 ? '10' : '19';
  const height = size[0] <= 480 ? '10' : '18';
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 23"
      fill={'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81378 5.86394C9.77571 3.74475 11.6051 0 12.5212 0C13.8515 -0.00127778 16.7656 7.26544 16.7656 7.26544C16.7656 7.26544 19.4632 7.49417 21.6435 7.728C22.8009 7.85194 24.8677 8.04105 24.997 8.66078C25.0247 8.79494 24.8584 9.34311 24.5562 9.72517C23.276 11.3479 19.9541 14.8248 19.9541 14.8248C19.9541 14.8248 20.1363 16.4859 20.2986 18.3029C20.4029 19.4784 20.684 21.8602 20.5824 22.2857C20.4715 22.7547 20.2722 22.8824 20.065 22.9566C19.5239 23.1482 18.2675 22.4033 16.7999 21.7209C14.8004 20.7894 12.5542 19.7941 12.5542 19.7941C12.5542 19.7941 11.0721 20.5467 9.31544 21.2814C7.43872 22.0659 5.53824 23.3591 4.74506 22.9042C4.25014 22.6192 4.61704 20.3984 4.80709 18.4217C4.98525 16.5574 5.13967 14.8542 5.13967 14.8542C5.13967 14.8542 4.03898 13.5994 2.75747 12.2577C1.37303 10.8074 -0.314963 9.24217 0.0506147 8.66717C0.326448 8.23272 1.58551 8.00017 3.69979 7.74589C5.94605 7.475 8.18967 7.28333 8.18967 7.28333C8.18967 7.28333 8.43418 6.7002 8.81378 5.86394Z"
        fill={fill}
      />
    </svg>
  );
};

export { RateStarIcon };
