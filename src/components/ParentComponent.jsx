import React, { useState } from 'react';
import Header from './header.jsx';
import InputForm from './inputForm.jsx';
import OutputPreview from './outputPreview.jsx';

function ParentComponent() {
  const [formData, setFormData] = useState({ name: ''});

  const handleFormSubmit = (data) => {
    setFormData(data);
    console.log(`The object of formData is: ${data}`);
  };

  return (
    <React.StrictMode>
      <Header />
      <div>
        <InputForm onFormSubmit={handleFormSubmit}/>
        <OutputPreview formData={formData}/>
      </div>
    </React.StrictMode>
  )
}

export default ParentComponent;