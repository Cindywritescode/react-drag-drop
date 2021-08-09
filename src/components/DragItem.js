import styled from 'styled-components';
// import { useState } from 'react';

const DragElement = styled.div`
  border: 2px dashed #95E3F9;
  font-size: 1.25rem;
  background-color: #DFF2F7;
  position: relative;
  padding: 5px 50px;
  color: #103c4a;
  text-align: center;
  
  &:hover {
    background-color: #B1C0C4;
    border: 2px dashed #468aa2;
  }
`

export const DragItem = ({
  name
}) => {
  const startDrag = () => {
    console.log('start dragging item');
  };

  return (

    <DragElement className="drag-drop-item"
         draggable
         onDrag={() => {
         }}
         onDragStart={startDrag}
         onDragEnd={() => {
         }}
    >
      <h3>{name}</h3>
    </DragElement>
  );
};
