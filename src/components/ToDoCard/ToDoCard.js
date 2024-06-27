import React from 'react'
import "./ToDoCard.css"
import ImgDel from "./delete-icon.png"

function ToDoCard({index,task,category,deleteItem}) {

  const CATEGORY_EMOJI_MAP = {
    Learning:"📚",
    work:"🧑‍🏭",
    Shopping:"🛒",
    health:"🧑‍⚕️",
    others:"🎑"
  
  }
  const CATEGORY_COLOURS ={
    Learning:"green",
    Work:"blue",
    Shopping:"pink",
    Health:"red",
    Others:"gray",
    Personal:"pink"
  
  }
  const theme ={
    primary:"#80ccff",
    primaryDark:"#0077cc",
    secondary:"#f4f4f4",
    text:"#333",
 
}
  return (
    <div className='todo_card'>
       <img src={ImgDel }
        alt="Delete" className='delete_icon' 
        onClick={()=>{
        deleteItem(index)
       }}/>
     {task}
      <span className='category' style={{
        backgroundColor: CATEGORY_COLOURS[category]
      }}>
     {CATEGORY_EMOJI_MAP[category] } {category}
      </span>
    
    </div>
  )
}

export default ToDoCard