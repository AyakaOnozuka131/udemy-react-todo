import React from "react";

const style = {
    padding: '10px',
    background: '#f7f7f7'
}

export const InputTodo = (props) =>{
  const { todoText, onChange, onClick, disabled } = props;
  return (
      <div style={style} className="addTodo">
        <input 
          disabled={disabled}
          id="add-text" 
          placeholder="TODOを入力" 
          value={todoText} 
          onChange={onChange}
        />
        <button 
          disabled={disabled}
          id="add-button" 
          onClick={onClick}>追加
        </button>
      </div>
  );
};

