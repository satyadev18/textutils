
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, {useState} from 'react';
import Alert from './component/Alert';

function App() {
  // dark mode variables
  const [mode, setMode] = useState('light'); 
  
  // alert component variables
  const [alert, setAlert] = useState(null);

  // showing alerts 
   
  const showAlert = (messege,type) =>{
   setAlert({ 
     msg:messege,
     type:type })

     //work on time out of alert box.

      setTimeout(()=>{
        setAlert(null);
      },1000);
       
   }
     


// on clicking switch button
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark'); 
      document.body.style.backgroundColor = '#042743';
      
      showAlert("Dark mode has been enabled", "success");
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>

    {/* Navbar Component */}
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

    {/* Alert box */}
    <Alert alert= {alert}/>
    <div className='container'>
     
      {/* Text box component. */}
      
    <TextForm heading="Enter the text below" mode={mode}/>
     </div>
     </>
   );
}

export default App;
