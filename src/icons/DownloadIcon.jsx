import styled, { keyframes } from 'styled-components';

const DownloadIconArrow = ({
  size = 80,
  animate = true
}) => (
  <AnimatedIcon
    animate={animate}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M12,2 L12,19 M5,12 L12,19 L19,12"/>
  </AnimatedIcon>
);

const DownloadIconPlate = ({
  size = 80,
}) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size / 2}
    viewBox="0 0 24 12"
  >
    <path d="M1,0 L1,6 L23,6 L23,0"/>
  </Icon>
);

const Icon = styled.svg`
  & path {
    fill: none;
    stroke: #92b0b2;
    stroke-width: 1.5;
  }
`;

const AnimatedIcon = styled(Icon)`
  animation: ${props => props.animate ? flipUpDown : 'none'} 1s ease-out infinite;
  margin-top: 30px;
`;

const flipUpDown = keyframes`
  from {
    transform: translateY(0);
  }

  50% {
    transform: translateY(1em);
  }

  to {
    transform: translateY(0);
  }
`;

export {
  DownloadIconArrow,
  DownloadIconPlate
};