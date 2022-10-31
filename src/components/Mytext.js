import React from 'react'


export default function Mytext(props) {

    // var heading = "hi";

    const OnClick = () =>{
         console.log("clicked");
         setText("hi");
    }
    const OffClick = () =>{
        console.log("offclicked");
        setText("hello");
   }

   const UpperCase = () =>{
    console.log("Uppercased clicked");
    let newText = Text.toUpperCase();
    setText(newText);
}
const LowerCase = () =>{
    console.log("Lowercased clicked");
    let newText = Text.toLowerCase();
    setText(newText);
}

   const onchange = (e) =>{
    console.log("opclicked");
    setText(e.target.value);
}


    const [Text,setText] = React.useState("hello");


  return (
      <>
    <h1>{props.heading}</h1>

    {/* <h1>{heading}</h1> */}

    <textarea className= "form-control" value={Text} onChange={onchange} id="myBox" rows="8">{Text}</textarea>

    <button className="btn btn-primary my-5 mx-2" onClick={OnClick}>type "hi"</button>
    <button className="btn btn-primary my-5 mx-2" onClick={OffClick}>type "hello"</button>
    <button className="btn btn-primary my-5 mx-2" onClick={UpperCase}>change to uppercase</button>
    <button className="btn btn-primary my-5 mx-2" onClick={LowerCase}>change to Lowercase</button>

    <div className="container">
        <h1>Text Summary</h1>
        <p>{Text.split(" ").length} words and {Text.length} charecters</p>
        <p>{0.4 * Text.split(" ").length} minutes to complete( average ).</p>
    </div>
    </>
  )
}
