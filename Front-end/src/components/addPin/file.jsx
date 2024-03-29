import React,{ useEffect, useState} from "react";



const FilePreview = () => {
  const [files, setFiles] = useState([]); 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://172.20.10.6:8000/api/event/events/");
        const data = await response.json();
        setFiles(data.files); 
      } catch (err) {
        console.log(err.message);
      }
    };
  
    fetchEvents();
  }, []);
  function extractFilename(url) {
    // Split the URL by the last forward slash (/)
    const parts = url.split("/");
    // Return the last element (assuming it's the filename)
    return parts[parts.length - 1];
  }

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.substring(file.lastIndexOf("/") + 1);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };
  console.log(files,"###")
  
  if (!files) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="bg-white shadow-lg rounded-lg p-8 shadow-[#07522A] mt-5">
          <p className="text-[#072E33] text-center font-extrabold">
            No files available.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="max-w-lg w-full bg-white shadow-md p-4 rounded-md">
        <h2 className="text-lg font-bold mb-4">Files:</h2>
        {files.map((file) => (
          <div key={file.id} className="flex items-center mb-2">
            <button
              onClick={() => handleDownload(file.file)}
              className="bg-[#07522A] hover:bg-[#71e1a5] text-[#ECAB22] font-bold py-2 px-4 rounded"
            >
              {extractFilename(file.file)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilePreview;
