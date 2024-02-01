import React, { useRef, useState } from "react";
// import arrow from "../assets/drop-arrow.svg";
// import attachicon from "../assets/attachfile.svg";
// import profile from "../assets/profile.svg";
//import documenticon from "../assets/document-icon.svg";

const DocumentCard = () => {
  const fileInputRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState([
    {
      name: "Architectural Concepts Draft 1",
      date: "02/01/2024",
      size: "2 MB",
    },
  ]);

  const handleAttachClick = () => {
    fileInputRef.current.click();
  };

  const formatFileSize = (sizeInBytes) => {
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB.toFixed(2) + " MB";
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;

    const exceedsMaxSize = Array.from(selectedFiles).some(
      (file) => file.size > 15 * 1024 * 1024
    );

    if (exceedsMaxSize) {
      setErrorMessage("File size exceeds the maximum limit of 15 MB.");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return;
    }

    const newFiles = Array.from(selectedFiles).map((file) => ({
      name: file.name,
      date: new Date().toLocaleDateString(),
      size: formatFileSize(file.size),
    }));

    setAttachedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    console.log(attachedFiles);
  };

  return (
    <section className="flex flex-col bg-white rounded-lg p-6 gap-4 z-0">
      <h3 className="font-bold">Documents:</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>
              <div className="flex gap-2">
                Title
                <img src="" alt="" />
              </div>
            </th>
            <th>
              <div className="flex gap-2">
                Owner
                <img src="" alt="" />
              </div>
            </th>
            <th>Last Modified</th>
            <th>File Size</th>
          </tr>
        </thead>

        <tbody>
          {attachedFiles.map((file, index) => (
            <tr
              className="border-2 font-normal text-base text-[#0F1420]"
              key={index}
            >
              <td className="flex items-center gap-2 ml-2 my-1">
                <div className="bg-[#5578f4] rounded-sm">
                  <img src="" alt="document icon" />
                </div>
                {file.name}
              </td>
              <td>
                <img
                  src=""
                  alt="profile"
                  className="w-7 h-7 rounded-full my-1 ml-4"
                />
              </td>
              <td className="text-center">{file.date}</td>
              <td className="text-center">{file.size}</td>
              {errorMessage && (
                <p className="text-white font-bold absolute bg-gray-600 right-0 top-0 py-3 px-8 rounded-l-full animate-bounce">
                  {errorMessage}
                </p>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleAttachClick}
        className="border-2 border-black ml-auto px-4 py-1 rounded-full flex gap-2 text-[#0F1420] font-medium"
      >
        <img src="" alt="attach file icon" />
        Attach Files
      </button>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
    </section>
  );
};

export default DocumentCard;
