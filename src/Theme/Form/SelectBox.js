import React from "react";


 const SelectBox = (props) => {
    return(
        <div>
        <label>{props.title}</label>
        <select className="form-select" name="direction" {...props}>
            {
                props.option && props.option.map((opt,index) =>{
                    return(
                        <option key={index} value={opt.value}  defaultValue={props.value === opt.value ? true:false }>{opt.title}</option> 
                    )
                })
            }
          </select>

    </div>   
    )
}
export default SelectBox;