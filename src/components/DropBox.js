import { useState } from 'react';
import { InstructionsSection, SummarySection } from './SummarySections';
import { DropTarget } from './DropTarget';
import { DropIcon } from './DropIcon';

export const DropBox = () => {
  const [draggedOver, setDraggedOver] = useState(false);
  const [dragCount, setDragCount] = useState(0);
  const [dropItems, setDropItems] = useState([]);

  const clearDropItems = () => setDropItems([]);

  const drop = (event) => {
    setDragCount(0);
    setDraggedOver(false);
    event.preventDefault();

    let files = [];
    for (let i = 0; i < event.dataTransfer.files.length; i++) {
      files.push(event.dataTransfer.files[i]);
    }
    setDropItems(files);
  };

  const dragEnter = () => {
    setDraggedOver(true);
    setDragCount(dragCount + 1);
  };

  const dragLeave = () => {
    setDragCount(dragCount - 1);
    if (dragCount === 1) setDraggedOver(false);
  };

  return (
    <DropTarget
      active={draggedOver}
      onDragOver={(event) => event.preventDefault()}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={drop}
    >
      <DropIcon animate={draggedOver}/>
      {dropItems.length === 0 && <InstructionsSection/>}
      {dropItems.length > 0 && <SummarySection files={dropItems} onClickMore={clearDropItems}/>}
    </DropTarget>
  );
};