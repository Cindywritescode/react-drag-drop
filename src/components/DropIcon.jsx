import { DownloadIconArrow, DownloadIconPlate } from '../icons/DownloadIcon';

const DropIcon = ({
  animate = true
}) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <DownloadIconArrow animate={animate}/>
    <DownloadIconPlate/>
  </div>
);

export {
  DropIcon
}