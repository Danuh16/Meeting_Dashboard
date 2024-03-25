import React from "react";

const FilePreview = ({ pinData }) => {
  const { fileUrl } = pinData;

  if (!fileUrl) {
    return null;
  }

  const fileExtension = fileUrl.split(".").pop().toLowerCase();

  const handlePreviewClick = () => {
    window.open(fileUrl, "_blank");
  };

  const previewContent = () => {
    if (fileExtension === "pdf") {
      return (
        <embed
          src={fileUrl}
          type="application/pdf"
          className="mt-5 h-[15rem] w-full"
        />
      );
    } else if (fileExtension.match(/(png|jpe?g|gif)$/)) {
      return <img src={fileUrl} alt="Preview" />;
    } else {
      return <p>Preview not available for this file type.</p>;
    }
  };

  return (
    <div>
      <button
        className="bg-white p-4 relative left-[-31rem] cursor-pointer text-[#072e33] text-lg rounded-2xl shadow-xl shadow-[#2e533f] font-bold flex items-center justify-center"
        onClick={handlePreviewClick}
      >
        Preview
      </button>
      <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
        Download
      </a>
      {previewContent()}
    </div>
  );
};

export default FilePreview;
