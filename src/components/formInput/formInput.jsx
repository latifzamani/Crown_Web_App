import React from "react";
import './formInput.scss';

const FormInput=({lable,handleChange,...otherParams})=>(
<div className="group">
    <input className="form-input" onChange={handleChange} {...otherParams}/>
    {
        lable ?
        <lable className={`${otherParams.value.length ? 'shrink' : ''} form-input-lable`}>{lable}</lable>
         :null
    }
</div>
);
export default FormInput;