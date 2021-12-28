import React from "react";
import {useState} from 'react';
import '../css/ModalDelete.css';




function EditUser ({contact,handleEdit,editedContact,index1,handleDelete}){
    const [opDelete,setOpDelete] = useState(false);
    
    const ModalDelete = (close) => {
        return(
            <div className = "formDelete">
            <h3>Bạn có chắc chắn muốn xóa</h3>
            <button type="button"
            onClick = {handleDelete}
            >Delete</button>
            <button
            onClick = {(e) => {close(false);e.preventDefault()}}
            >Close</button>
        </div>
        );
    }
    return(
        <tr key={index1}>
            <td>{index1 + 1}</td>
            <td>{contact.Name}</td>
            <td>{contact.Number}</td>
            <td>{contact.Address}</td>
            <td>{contact.Area}</td>
            <td>{contact.Date}</td>
            <td>{contact.Date1}</td>
            <td>{contact.Date2}</td>
            <td>
                <button 
                type = "button"
                onClick={(event) => handleEdit(event, contact,editedContact)}
                >Edit</button>
                <button type = "button"
                //onClick = {() => handleDelete(contact.Id)}
                onClick={() => {setOpDelete(true)}}
                >Delete</button>
                {opDelete && <ModalDelete close = {setOpDelete}  />}
            </td>
        </tr>

    );
    
}
export default EditUser;