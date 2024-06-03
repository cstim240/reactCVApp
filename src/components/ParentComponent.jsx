import React, { useState } from 'react';
import Header from './header.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import EducationInfo from './EducationInfo.jsx';
import PracticalInfo from './PracticalInfo.jsx';
import OutputPreview from './outputPreview.jsx';
import printDocument from './PDFCreate.jsx';

function ParentComponent() {
  const [generalInfoData, setGeneralInfoData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [practicalExp, setPracticalExp] = useState({});
  
  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfoData(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationData(data);
  };

  const handlePracticalExpSubmit = (data) => {
    setPracticalExp(data);
  };

  return (
    <React.StrictMode>
      <div className="wrapper">
        <div className="contentBody">
          <div className="inputForm">
            <Header/>
            <GeneralInfo onFormSubmit={handleGeneralInfoSubmit}/>
            <EducationInfo onFormSubmit={handleEducationInfoSubmit}/>
            <PracticalInfo onFormSubmit={handlePracticalExpSubmit} />
            <button onClick={printDocument} id='downloadBtn'>
              Download as PDF
            </button>
          </div>

          <OutputPreview generalInfoData={generalInfoData} educationData={educationData} practicalExp={practicalExp}/>

        </div>
      </div>
      
    </React.StrictMode>
  )
}

export default ParentComponent;