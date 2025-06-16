import React, { useState, useCallback } from 'react';
import './DragAndDrop.css';

//prop is passed in by the parent component to handle new files 
const DragAndDrop = ({ onFilesAdded }) => {
  const [dragOver, setDragOver] = useState(false);

  //begin item dragging
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  //end item dragging
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  //execute when items are dropped in the drop zone
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onFilesAdded(Array.from(e.dataTransfer.files));
      e.dataTransfer.clearData();
    }
  }, [onFilesAdded]);

  return (
    <div
      className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
      //event handler
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      Drag files here to upload
    </div>
  );
};

export default DragAndDrop;