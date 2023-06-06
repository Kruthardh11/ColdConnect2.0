import Navbar from './Navbar';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { BiUpload } from "react-icons/bi";

const ColdMail = () => {
  const navigate = useNavigate();
  const [previewSource, setPreviewSource] = useState('');
  const [apiData, setApiData] = useState(''); // State to store API data
  const [pdfText, setPdfText] = useState(''); // State to store PDF text
  const [resumeText, setResumeText] = useState(''); // Temporary variable to store resume text
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null); // Ref for the textarea

  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop().toLowerCase(); // Extension is singled out and made into lowercase.
      if (fileExtension === 'pdf') {
        const previewURL = URL.createObjectURL(file);
        setPreviewSource(previewURL);
        const text = await extractPdfText(file);
        setPdfText(text);
        setResumeText(text); // Store resume text in the temporary variable
      } else {
        alert('Invalid file format. Only PDF documents are allowed.');
      }
    }
  };

  const extractPdfText = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const typedarray = new Uint8Array(event.target.result);
        pdfjs.getDocument(typedarray).promise.then(function (pdf) {
          pdf.getPage(1).then(function (page) {
            page.getTextContent().then(function (textContent) {
              const text = textContent.items.map((item) => item.str).join(' ');
              resolve(text);
            });
          });
        });
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const clearFileInput = () => {
    setPreviewSource('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleGenerateMail = () => {
    // Simulated API call
    const apiResponse = 'This is the data from the API'; // Replace with actual API call
    setApiData(apiResponse);

    if (textareaRef.current) {
      textareaRef.current.value = apiResponse;
    }
  };

  const handleGoBack = () => {
    navigate('/options');
  };

  return (
    <>
    <Navbar/>
    <button onClick={handleGoBack} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[45%] ">
      Go Back
    </button>

<div className="sm:flex sm:flex-col-2 p-[2%] border-4 border-blue-700 m-[4%]">
  <div className="sm:mr-[15%] border-4 border-yellow-500 p-[3%]">
    <span className="flex items-center">
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileInputChange}
        ref={fileInputRef}
        id="file-input"
        class="hidden"
      />
      <div className='bg-blue-500 rounded p-[1%] text-lg mb-[5%]'>      
         <BiUpload  />
      </div>
      <label for="file-input" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer sm:mb-[5%]">
        Choose File
      </label>
    </span>
    {previewSource && (
      <div>
        <iframe title="Preview" src={previewSource} class="w-96 h-96"></iframe>
        <button onClick={clearFileInput} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">
          Clear
        </button>
      </div>
    )}
  </div>
  <div className="ml-[5%] border-4 border-yellow-500 p-[5%]">
  <textarea
    className='h-96 w-96'
    placeholder="Paste or enter text here"
    ref={textareaRef}
    value={''} // Render the resume text from the temporary variable
    readOnly
  ></textarea>
   <button onClick={handleGenerateMail} class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
  Generate Mail
</button>
</div>
 

</div>



    </>
  );
};

export default ColdMail;