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
    <button className="btn btn-primary my-5" onClick={OnClick}>type "hi"</button>
    <button className="btn btn-primary my-5 mx-5" onClick={OffClick}>type "hello"</button>
    <button className="btn btn-primary my-5" onClick={UpperCase}>change to uppercase</button>
    </>
  )
}
