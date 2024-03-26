import React, { useState } from 'react';

const FilePreview = ({ files }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePreviewClick = (index) => {
    setSelectedIndex(index);
  };

  const previewContent = (file) => {
    const fileExtension = file.fileUrl.split(".").pop().toLowerCase();

    if (fileExtension === "pdf") {
      return (
        <div className="preview-box flex absolute top-60 -left-[6rem] justify-center h-[25rem] w-full">
          <embed src={file.fileUrl} type="application/pdf"  />
        </div>
      );
    } else if (fileExtension.match(/(png|jpe?g|gif)$/)) {
      return (
        <div className="preview-box flex absolute -left-[6rem] top-24 justify-center h-[25rem] w-[55rem]">
          <img src={file.fileUrl} alt="Preview" />
        </div>
      );
    } else {
      return (
        <div className="preview-box flex absolute left-[18rem] top-[38rem] justify-center h-[20rem] w-[55rem]">
          <p>Preview not available for this file type.</p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
    {files.map((file, index) => (
      <div key={index}>
        <button
          onClick={() => handlePreviewClick(index)}
          className="bg-white p-4 relative left-[0rem] top-5 cursor-pointer text-[#072e33] text-lg rounded-2xl shadow-xl shadow-[#2e533f] font-bold flex items-center justify-center"
        >
          Preview
        <a href={file.fileUrl} download target="_blank" rel="noopener noreferrer">
          : Download
        </a>
        </button>
        {selectedIndex === index && previewContent(file)}
      </div>
    ))}
  </div>
  );
};

export default FilePreview;