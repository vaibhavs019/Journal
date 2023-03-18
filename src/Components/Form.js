import React, {useState} from 'react'

export default function Form(props) {
    const openRCS = () => {
        console.log("RCS Journal was clicked " + text)
        let newText = text.toLowerCase();
        setText(newText) 
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)

    }
    const [text, setText] = useState("Enter text here");
  return (
    <div>
        <h1>{props.Heading}</h1>
        <div class="mb-3">
            <label for="My box" class="form-label">Example textarea</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="My box" rows="8"></textarea>
        </div>
        <button className='"btn btn primary' onClick={openRCS}>RCS Journal</button>
    </div>
  );
}
