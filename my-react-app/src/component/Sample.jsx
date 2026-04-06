// import React from 'react'

// function Sample({count, setCount}) {

//     return (
//         <div>
//             <h2>Trending topics</h2>
//             <p>Lorem ipsum</p>
//             <button
//             className="counter"
//             onClick={() => setCount((count) => count + 1)}
//             >
//                 Count is {count}
//             </button>
//         </div>
//     )
// }

// export default Sample

import React,{Component, useState} from 'react'

function Sample(props) {
    const [name,setName]=useState("Devendra")
    const [age,setAge]=useState(20) 

  return (
    <div>
      <h2>Trending topics</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
      <h3>{name}</h3>
        <button onClick={()=>{
            setName("Alex")
            
        }}>Name Change</button>
    <button
        className="counter"
        onClick={() => props.setCount((count) => count + 1)}
    >
        Count is {props.count}
    </button>
    </div>
  )
}

export default Sample