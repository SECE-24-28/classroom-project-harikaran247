import { useState } from "react"
const Display4=()=>{
    /*const[Name,setName]=useState("Sapari")
    const[Age,setAge]=useState(21)
    const[Mobile,setMobile]=useState(123467890)*/
    const[Student,setStudent]=useState({
        Name:"Hari",
        Age:18,
        Mobile:7338923116
    })
    function updateStudent(){
        setStudent({Name:"Ragul9",Age:9,Mobile:99999999999})
    }
    return(
        <>
        <h1>I am {Student.Name} and Age is {Student.Age} and mobile Number is {Student.Mobile}</h1>
        <button onClick={updateStudent}>UpdateStudent</button>
        </>
    )
}
export default Display4