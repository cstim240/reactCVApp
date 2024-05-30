import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
Application structure: 

Component 1 = Section for general information like name, 
email and phone. 

Component 2 = Section for educational experience (school name,
  title of study, date of study)
)

Component 3 = Section for work experience (company name, 
  position title, main responsibilities of job, date from and until when you worked there)
)

Edit and submit button for each section or for the whole CV. 
Submit button submits form and displays the value of input fields in HTML elements.

Edit button should add back (display) the input fields, with the previously displayed 
information as values. In those input fields, you should be able to edit and resubmit the content. 
Make heavy use of props and state.

Create components directory under the src directory to store the components.

Include styles directory under your src directory to store your CSS files.
These will be imported in the components.

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
