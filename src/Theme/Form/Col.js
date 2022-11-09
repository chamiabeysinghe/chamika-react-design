import React from "react";

const Col = (props) => {
    return(
        <div className={`col-xl-${props.size}`} {...props}>
            {props.children} 
        </div>
    )
}
export default Col;