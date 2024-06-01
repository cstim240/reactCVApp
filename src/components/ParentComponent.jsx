import React, { useState } from 'react';
import Header from './header.jsx';
import GeneralInfo from './GeneralInfo.jsx';
import OutputPreview from './outputPreview.jsx';

function ParentComponent() {
  const [formData, setFormData] = useState({});
  
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <React.StrictMode>
      <Header />
      <div>
        
        <div className="inputForm">
          <GeneralInfo onFormSubmit={handleFormSubmit}/>
        </div>

        <OutputPreview formData={formData}/>
      </div>
    </React.StrictMode>
  )
}

export default ParentComponent;