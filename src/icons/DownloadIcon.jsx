import styled from 'styled-components';

const DownloadIcon = ({
  size = 94
}) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"/>
  </Icon>
);

const Icon = styled.svg`
  & path {
    fill: none;
    stroke: #92b0b2;
    stroke-width: 1.5;
  }
`

export {
  DownloadIcon
}