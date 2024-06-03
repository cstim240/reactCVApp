import React, { useState } from 'react';
import Header from './header.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import EducationInfo from './EducationInfo.jsx';
import OutputPreview from './outputPreview.jsx';

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
          </div>

          <OutputPreview generalInfoData={generalInfoData} educationData={educationData}/>

        </div>
      </div>
      
    </React.StrictMode>
  )
}

export default ParentComponent;