

import React,{useState} from 'react'
import './Form.css'
function Form(props) {

    const [inputError,setInputError]= useState('')
    const inputTextHandler=(e)=>{
        console.log(e.target.value);
        props.setInputText(e.target.value)
        setInputError('')
    }
    const submitTodoHandler=(e)=>{
        e.preventDefault();
        const realInput=props.inputText.trim();
        if(realInput.trim()===''){
            setInputError("Enter valid todo");
            return
        }
        const todoExists=props.todos.some((todo)=>todo.text.toLowerCase() === realInput.toLowerCase());
        if(todoExists){
            setInputError("ToDo Already Exists")
            return
        }
        props.setTodos([
            ...props.todos,{text:realInput, completed:false , id:Math.random()*1000}
        ]);
        props.setInputText("")
    }
  
   
  return (
    <div>
    {inputError?<p className="error-msg">{inputError}</p>:null}
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
    </form>  
    </div>
    ) 
}


export default Form