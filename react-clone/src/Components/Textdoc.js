
import React, { useState } from 'react'

export default function Textdoc(props) {
    const handleUpClick = () => {
        console.log("uppercase Conveted" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        console.log("uppercase Conveted" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () => {
        console.log("uppercase Conveted" + text);
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }

    const [text, setText] = useState("enter text here");
    return (
        <>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Mail address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@examplramesnitmukesh.com" />
            </div>
            <h1> Enter the text below </h1>
          <div className="container"> 
            
            <div className="mb-3">

                <label for="examp" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="examp" rows="8"></textarea>
            </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}> Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleloClick}> Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleclearClick}> Reset</button>
                
        </div>
        <div className="container my-3" >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length}word and {text.length} character</p>
            <p>{0.08* text.split(" ").length} minute required to read </p>
            <h2> Preview</h2>
            <p>{text}</p>
        </div>

        </>
    )
}
