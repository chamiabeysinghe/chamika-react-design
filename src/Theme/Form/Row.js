import React from "react";

const Row = (props) => {
    return(
        // <div className="row gy-5 g-xl-10"{...props}>
        //    {props.children} 
        // </div>
        <div className="row "{...props}>
           {props.children} 
        </div>
    )
}

export default Row;