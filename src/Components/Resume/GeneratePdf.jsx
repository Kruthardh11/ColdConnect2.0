import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';


const GeneratePdf = ({ formData }) => {



    // const axios = require('axios');
    const skill = 'reactjs';

    const accessToken = 'AQVv-XsKnW3ifoUS9jI3t6m_rocJsxvoTT6jr68qbMOG5iscpTqRrbh9nhQKKDSVcgdZvTT5OVIal1TL-LXvBCgjefb2RdJub2cJsQFSRg-IepMTcpZlpiDqsKU0USv4qvGmfxng3T9da8oKZv99YSM7DjP6V2NhR4CSoMaPQ5QJklBqWmhnlNk8l7CKKui72xI7hpNp-qF9Zu1okFbNjmqLJKKI6a57iqhx2TJQc3fHhSlm1WtfFYm5zsMZ2tKC5rBDoqaWwV_1XgELjq7-trNv6qr48gMDQJFHuGlXTTX4pA8tKgdnahvuNbUUVCwH4kGcqwCd-e7lPa4R2hw3iyVcFFnJ0Q';

    const handleGetJobs = () => {
      axios
        .get('https://api.linkedin.com/v2/jobs', {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          params: {
            'q': skill,
            'fields': 'jobs(title,company)'
          }
        })
        .then(response => {
          // Handle the response and extract the organization data
          const jobs = response.data;
          // Access the organization data for each job
          jobs.forEach(job => {
            const { title, company } = job;
            const companyName = company.name;
            // Console log the job and organization data
            console.log(`${title} at ${companyName}`);
          });
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
      }

    const generateAndDownloadPDF = async () => {
        const pdf = new jsPDF();
      
        // Get the content element that you want to convert to PDF
        const contentElement = document.getElementById('pdf-content');
      
        // Convert the content element to a canvas
        const canvas = await html2canvas(contentElement);
      
        // Convert the canvas to an image data URL
        const imgData = canvas.toDataURL('image/jpeg');
      
        // Add the image data URL to the PDF document
        pdf.addImage(imgData, 'JPEG', 10, 10, 190, 0);
      
        // Save the PDF file
        pdf.save('my-pdf-document.pdf');
      }; 
  
    
  return (
    <div>
        <button onClick={generateAndDownloadPDF}>Download PDF</button>

        <div className='flex items-start justify-center bg-blue-100 '>
      <div id="pdf-content" className='flex '>
      <div className='hidden md:block'>
        <div className="text-center py-4">
            <h3 className="text-2xl font-sans">Kruthardh Tirunahari</h3>
            <h4 className=''>Full stack developer</h4>
        </div>
        <div className="flex ">
            <div className=" border-r-2 border-black bg-blue-400 p-5">
                {/* Content for the left column */}
                <div className='border-b-2 border-gray-500'>
                  <h3 className='font-normal'>contact </h3>
                  <ul className='ml-5'>
                    <li>phone</li>
                    <li>email</li>
                    <li>github</li>
                  </ul>

                </div>
                
                <div>skills</div>
                
                <div>awards</div>
                
            </div>
            <div className=" bg-red-400 p-5">
                {/* Content for the right column */}
                <div>summary</div>
                
                <div>exp</div>
                
                <div>projects</div>
            </div>
          </div>
        </div>
    </div>
    </div>

    <button onClick={handleGetJobs} > Get jobs</button>
    </div>
  );
}

export default GeneratePdf;
