import React, { useState } from 'react';
import Header from './header.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import OutputPreview from './outputPreview.jsx';

function ParentComponent() {
  const [generalInfoData, setGeneralInfoData] = useState({});
  
  const handleGeneralInfoSubmit = (data) => {
    setGeneralInfoData(data);
  };

  return (
    <React.StrictMode>
      <div className="wrapper">
        <Header />
        <div className="contentBody">
          <div className="inputForm">
            <GeneralInfo onFormSubmit={handleGeneralInfoSubmit}/>
          </div>

          <OutputPreview formData={generalInfoData}/>
        </div>
      </div>
      
    </React.StrictMode>
  )
}

export default ParentComponent;