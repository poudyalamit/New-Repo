import React, { useState } from 'react'

export default function Textform(props) {


    const handleupclick = () => {
        // console.log("clicked" + text);
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert("Converted to uppercase", "success");
    }
    const handledownclick = () => {
        // console.log("clicked" + text);
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to lowercase", "success");

    }
    const handleclearclick = () => {
        // console.log("clicked" + text);

        let newtext = '';

        setText(newtext);
        props.showalert("Text has been cleared", "success");

    }
    const handlecopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied to Clipboard", "success");


    }
    const handlespaceclick = () => {
        // console.log("clicked" + text);

        let newtext = text.replace(/\s+/g, ' ').trim();

        setText(newtext);
        props.showalert("Extra space has been removed", "success");

    }

    const onchange = (Event) => {
        // console.log("changed");
        setText(Event.target.value);


    }

    const [text, setText] = useState('');/*'Enter text here'/*this is just a default value given*/
    return (
        <>
            <div div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={onchange} value={text} id="mybox" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="10" placeholder='Enter text here' ></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleupclick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handledownclick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handlespaceclick}>Remove extra spaces</button>
                <button className='btn btn-primary mx-1' onClick={handleclearclick}>Clear</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+\).length} words and {text.length} characters </p>
                <p> You can read it within {0.004 * text.split(/\s+\).length} minutes.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>
        </>
    )
}
