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
 import style from '../css/Sample.module.css'
 import styled from '@emotion/styled'


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

// export default Sample

class Sample extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Hello",
            age:19
        }
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }

    shouldComponentUpdate(nextProps,nextState){  //tels whether to update or not
        if(nextProps.count===1){
            return false
        }
        console.log("Component Should Update")
        return true
    }

    componentDidUpdate(){
        console.log("Component Did Update")
    }

    componentWillUnmount(){
        console.log("Component Will Unmount")
    }


    render(){
        return (
            <div>
            <h2>Trending topics</h2>
            <h3>{this.state.name}</h3>
            <button onClick={()=>{
                this.setState({name:"Alex"})
                
                }}>Name Change</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quae maiores, nobis laboriosam non commodi quia consequuntur vitae dolore facere deserunt quas recusandae iste harum in, provident aut reprehenderit temporibus.</p>
            <button
                className="counter"
                onClick={() => this.props.setCount((count) => count + 1)}
            >
                Count is {this.props.count}
            </button>
            <div>
                <button>First</button>
                <button green>Second</button>
                <button className='bg-red-500 text-white w-20 h-8'>Third</button>
                {/* <button style={{backgroundColor:"indigo", color:"white", width:"100px", height:"30px"}}>First</button>
                <button style={{backgroundColor:"green", color:"white", width:"100px", height:"30px"}}>Second</button> */}
            </div>
            </div>
        )
    }

}
export default Sample

const Button=styled.button`
background-color: green;
color: white;
width: 10px;
height: 35px;
border-radius: 10px;
border: none
`
const buttonStyle=css`
backgroundColor:"orange";
    color:"white"; 
    width:"100px";
    height:"35px";
    borderRadius:"10px";
    border:"none"
`

