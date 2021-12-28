import React from "react";
import '../css/editForm.css';
import {useState} from 'react';

function EditForm({editFormData,handleEditFormSubmit,edit,index1}){
    const [data, setData] = useState(editFormData);
    const handleOnChange = (e) =>{
        e.preventDefault();
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    console.log("hah",data)
    return (
        <tr key={index1+1}>
            <td>{index1 + 1}</td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Name..."
                    name = "Name"
                    value = {data.Name}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Number..."
                    name = "Number"
                    value = {data.Number}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Address..."
                    name = "Address"
                    value = {data.Address}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Area..."
                    name = "Area"
                    value = {data.Area}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Date..."
                    name = "Date"
                    value = {data.Date}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Date1..."
                    name = "Date1"
                    value = {data.Date1}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <input 
                    type = "text"
                    placeholder = "Edit Date2..."
                    name = "Date2"
                    value = {data.Date2}
                    onChange={(e) =>{
                        handleOnChange(e)
                    }}
                >
                </input>
            </td>
            <td>
                <button type ="button"
                onClick = {() =>handleEditFormSubmit(data)}
                
                >Save</button>
            </td>
        </tr>
        
    );
}
export default EditForm;