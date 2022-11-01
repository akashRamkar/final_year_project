import React from 'react'
import Topic_list from './Topic_list'

export default function Topic_Title() {
    let arr=[
        {
          Topic:"Operating System "
        },
        {
          Topic:"Computer Network"
        },
        {
          Topic:"DBMS"
        },
        {
          Topic:"MySql"
        },
        {
          Topic:"Java"
        },
        {
          Topic:"Cpp"
        },
        {
          Topic:"Python"
        },
    
        {
          Topic:"Data Structure"
        },
        
      ]
  return (
    <div className="Container">
      <div className="rectangle">
        <div className="content">
      <h2 className="Main">Popular Topic</h2>
      {
      arr.map((tp)=>{
          return(
            <Topic_list todo={tp} key={tp.Topic}/>
          )
      })
    }
        
    </div>
    </div>
    </div>
  )
}
