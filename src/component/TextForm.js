import React, {useState} from "react";
export default function TextForm(props) {


    // creating react state variables
    const [text, setText] = useState('');

    // listening button events
     
    // convert text in upper case
    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)

    }

    //convert text in lower case
    const handlelowClick =()=>{
        
        let newText = text.toLowerCase();
        setText(newText)

    }
   
    //  text copying
    const handleCopyClick =()=>{

        
        
       var text = document.getElementById("myBox");
       text.select();
       navigator.clipboard.writeText(text.value);
    }

    
    

    //clearing text 

    const handleclear =()=>{
        let newText = ''
        setText(newText)

    }

    //handling change on Form

    const handleChange = (event)=>{
        setText(event.target.value)
    }


    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
               {/* text box */}
                <textarea className="form-control"  value={text} onChange={handleChange} style={{ backgroundColor: 'white'}} id="myBox" rows="8">

                </textarea>
            </div>

            {/* Buttons Handlling events */}
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to upper case</button>

            <button className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleclear}>Clear text</button>


            <div className="container my-3" style={{color: (props.mode==='dark') ?'white':'#042743'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                
                <p>{Math.floor(0.04201* (text.split(" ").length-1))} Minute read</p>

                <h2>Preview</h2>

                 <p>{text}</p>
            </div>


        </div>
        </>
    )
}