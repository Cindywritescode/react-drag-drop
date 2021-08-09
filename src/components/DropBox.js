import { useState } from 'react';
import styled from 'styled-components';
import { DownloadIcon } from '../icons/DownloadIcon';

const DropTarget = styled.div`
  margin: 20px 60px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background-color: #c8dadf;
  outline: 2px dashed ${props => props.active ? '#103c4a' : '#92b0b3'};
  outline-offset: -10px;
  & p {
    line-height: 3;
    color: #103c4a;
  }
`;


export const DropBox = () => {
  const [draggedOver, setDraggedOver] = useState(false);

  const drop = (event) => {
    event.preventDefault();
  };

  return (
    <DropTarget
      active={draggedOver}
      onDragOver={(event) => event.preventDefault()}
      onDragEnter={() => setDraggedOver(true)}
      onDragLeave={() => setDraggedOver(false)}
      onDrop={drop}
    >
      <DownloadIcon/>
      <p><strong>Choose a file</strong> or drag it here</p>
    </DropTarget>
  );
};


// export const DropBox = ({
//   children
// }) => {
//   const [draggedOver, setDraggedOver] = useState();
//
//   const drop = (event) => {
//     event.preventDefault();
//     console.log('Dropped something here')
//   };
//
//   const dragOver = (event) => {
//     event.stopPropagation();
//     event.preventDefault();
//   };
//
//   return (
//     <div
//       style={{ padding: '10em', border: '1px solid red' }}
//       onDrop={drop}
//       onDragEnter={() => console.log('Wohoo: Entered the drag target')}
//       onDragOver={dragOver}
//       onDragLeave={() => console.log('Woohoo: Left the drag target!')}
//     >
//       {children}
//     </div>
//   );
// };