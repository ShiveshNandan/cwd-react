import React, { useState } from 'react'
// import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);        
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);        
    }

    const handleSenClick = ()=>{
        // console.log("Uppercase clicked" + text);
        let newText = text[0].toUpperCase() + text.toLowerCase();
        setText(newText);        
    }
    const handleOnChange = (event) => {
        // console.log("on Change ");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here....');

  return (
    <>
    <div>
        <h1>{props.inside}</h1>
      <div className="form-floating">
  <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
</div>
  <button className='btn btn-primary my-5' onClick={handleUpClick} >change to uppercase</button>
  <button className='btn btn-primary my-5 mx-3' onClick={handleLoClick} >change to lowercase</button>
  <button className='btn btn-primary my-5 mx-3' onClick={handleSenClick} >change to Sentance case</button>
    </div>
    <div className="container my-5">
        <h1>Your text Summary</h1>
        <p>you write {text.split(" ").length} and {text.length} charecters.</p>
        <h2 className=' my-3'>time to read</h2>
        <p> {0.008 * text.split(" ").length} minutes to complete your reading </p>
    </div>
    </>
  )
}
