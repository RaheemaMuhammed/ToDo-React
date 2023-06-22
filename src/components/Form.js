 
import React from 'react'

function Form(props) {
    
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        props.setInputText(e.target.value)
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        props.setTodos([
            ...props.todos,{text:props.inputText, completed:false , id:Math.random()*1000}
        ]);
        props.setInputText("")
    }
  return (
       <form >
      <input
       value={props.inputText} 
       onChange={inputTextHandler} 
       type="text" 
       className="todo-input"
       required />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>  ) 
}

export default Form