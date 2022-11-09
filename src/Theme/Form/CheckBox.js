import React from "react";


const CheckBox = (props) => {
    return (
        <div className=" form-check form-check-custom  me-10">
            <input className="form-check-input h-20px w-20px" type='checkbox' name={props.name} 
            value={props.value} {...props}  />
            <label className="form-check-label" htmlFor="flexCheckbox20">{props.title}</label>
        </div>

    )
}
export default CheckBox;