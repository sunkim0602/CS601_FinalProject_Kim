import React, { useState, useCallback } from 'react';

type DragAndDropProps = {
  onFilesAdded: (files: File[]) => void;
};

const DragAndDrop: React.FC<DragAndDropProps> = ({ onFilesAdded }) => {
  const [dragOver, setDragOver] = useState<boolean>(false);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesArray = Array.from(e.dataTransfer.files);
      onFilesAdded(filesArray);
      e.dataTransfer.clearData();
    }
  }, [onFilesAdded]);

  return (
    <div
      className={`drop-zone ${dragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
        border: '2px dashed #ccc',
        padding: '30px',
        textAlign: 'center',
        cursor: 'pointer',
        margin: '30px',
      }}
    >
      Drag files here to upload
    </div>
  );
};

export default DragAndDrop;