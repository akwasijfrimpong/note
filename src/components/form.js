import React, {useState} from "react";

const textareaStyle = {
    minHeight: '100px',
    height: "300px",
};
function handleSubmit(e){
    e.preventDefault();
    const form = e.target[0].value;
    console.log(form);    

}
function handleReset(e){
    e.preventDefault();
    e.target[0].value = "";
   
}

const Form = ()=>{
  return(
    <form onReset={handleReset} onSubmit={handleSubmit}>
        <textarea name="text"
    
        style={textareaStyle}/>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
        <button>Send</button>
    </form>
  );
}

export default Form;