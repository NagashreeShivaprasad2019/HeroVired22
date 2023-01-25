import React,{useEffect} from 'react'
import "./subheader2.css"
export default function Subheader2() {
   // making state
   // let [hover, setHover] = useState(false)
    
 //inline style attrubute takes an object ;
    let myStyles = {
       backgroundColor :"lightblue"
    }
    // let hoverstyle = {
    //     border:hover ?"1px solid black" :"none"
    // }

    // const handleHoverin = () => {
    //     setHover(true)
    // }
    // const handleHoverout = () => {
    //     setHover(false)
    // }

    useEffect(() => {
        let subheader = document.querySelector(".subheader2")
        console.log(subheader.children);
        let childofSubheader = subheader.children;
        for (let i = 0; i < childofSubheader.length; i++){
            childofSubheader[i].addEventListener("mouseenter", () => {
                childofSubheader[i].style.border="1px solid black"
            })
        }

    },[])

    return (
        <div className="subheader2" style={myStyles}>
            {/* <div onMouseEnter={handleHoverin} onMouseLeave={handleHoverout} style={hoverstyle}>All</div> */}
            <div>My Applications</div>
          
            <div>Shortlisted</div>

            <div>Interviewing</div>

            <div>Rejected</div>

            <div>Offer Received</div>
        </div>

        

    )

    
}



