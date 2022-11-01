import React from 'react'

export default function Topic_list({todo}) {
    let textstyle={
        margin:"5px 0px 0px 65px",
        
        //backgroundColor: "rgb(117, 117, 196)",
     }
  return (
    <div className="item">
      {/* <h4 style={textstyle}>{todo.Topic}</h4> */}
      <button  className=" button" style={textstyle}>{todo.Topic}</button>
    </div>
   
  );
  
}
