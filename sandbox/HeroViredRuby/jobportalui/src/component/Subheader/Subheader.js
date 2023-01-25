import React,{useState,useEffect} from 'react'
import "./subheader.css"
export default function Subheader() {
   // making state
    let [hover, setHover] = useState(false)
    
 //inline style attrubute takes an object ;
    let myStyles = {
       backgroundColor :"lightblue"
    }
    let hoverstyle = {
        border:hover ?"1px solid black" :"none"
    }

    const handleHoverin = () => {
        setHover(true)
    }
    const handleHoverout = () => {
        setHover(false)
    }

    useEffect(() => {
        let subheader = document.querySelector(".subheader")
        console.log(subheader.children);
        let childofSubheader = subheader.children;
        for (let i = 0; i < childofSubheader.length; i++){
            childofSubheader[i].addEventListener("mouseenter", () => {
                childofSubheader[i].style.border="1px solid black"
            })
        }

    },[])

    return (
        <div className="subheader" style={myStyles}>
            {/* <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>All</div> */}
            <div>Snapshot</div>
          
            <div>All Jobs</div>

            <div>Eligible Jobs</div>

            <div>Applied Jobs</div>
        </div>

        

    )

    
}



