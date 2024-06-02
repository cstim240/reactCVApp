import React, { useState } from 'react';
import Header from './header.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import EducationInfo from './EducationInfo.jsx';
import OutputPreview from './outputPreview.jsx';

function ParentComponent() {
  const [generalInfoData, setGeneralInfoData] = useState({});
  const [educationData, setEducationData] = useState({});
  
  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfoData(data);
  };

  const handleEducationInfoSubmit = (data) => {
    setEducationData(data);
  };


  return (
    <React.StrictMode>
      <div className="wrapper">
        <Header />
        <div className="contentBody">
          <div className="inputForm">
            <GeneralInfo onFormSubmit={handleGeneralInfoSubmit}/>
            <EducationInfo onFormSubmit={handleEducationInfoSubmit}/>
          </div>

          <OutputPreview formData={[generalInfoData, educationData]}/>

        </div>
      </div>
      
    </React.StrictMode>
  )
}

export default ParentComponent;