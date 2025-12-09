import {useState } from "react"
function Display1(){
    const [myName,setMyName]=useState("hello")
   /* var name="demo"
 console.log("im inside the disp1",{name})
    function changeName(d){
        var name=d
        console.log("im inside the disp1",{name})
    }*/
   console.log("im inside the disp1",{myName})
    return (
        <>
       <h2> ima from dis1{myName}</h2>
       <button onClick={()=>{setMyName('not demo')}}>click here</button>
       </>
    )
}
export default Display1