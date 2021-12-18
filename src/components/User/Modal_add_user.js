import React from "react";
import '../../css/modal_add_user.css';
import {nanoid} from 'nanoid';
import {useState} from 'react';
import data from '../../mock-data.json';




function Modal_add_user ({closesModal}){ 
    const [contacks,setcontacks] = useState(data);
    const [addFormData,setAddFormData] = useState({
        Name : '',
        Number : '',
        Address : '',
        Area : '',
        Date : '',
        Date1 : '',
        Date2 : ''
    })

    const handleAddFormChange = (event) =>{
        event.preventDefault();
        const fielName = event.target.getAttribute('name');
        const fielValue = event.target.value;
        const newFormData = { ...addFormData};
        newFormData [fielName] = fielValue;
        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            ID: nanoid(),
            Name: addFormData.Name,
            Number: addFormData.Number,
            Address: addFormData.Address,
            Area: addFormData.Area,
            Date: addFormData.Date,
            Date1: addFormData.Date1,
            Date2: addFormData.Date2,
        };
        const newContacts = [ ...contacks, newContact];
        setcontacks(newContacts);
    };
    
    
    return(
        <form>
        <div className="Add-user">
            <input 
                type="text" 
                placeholder="Tên" 
                className="input0" 
                name = "Name"
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                placeholder="Số CCCD" 
                className="input0" 
                name = "Number"
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                placeholder="Địa chỉ" 
                className="input0" 
                name = "Address"
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                placeholder="Khu Vực" 
                className="input0" 
                name = "Area"
                onChange={handleAddFormChange}    
            />
            <input 
                type="text" 
                placeholder="Ngày Nhiễm Bệnh" 
                className="input0" 
                name = "Date"
                onChange={handleAddFormChange}
            />
            <input 
                type="text" 
                placeholder="Ngày Khỏi Bệnh" 
                className="input0" 
                name = "Date1"
                onChange={handleAddFormChange}    
            />
            <input 
                type="text" 
                placeholder="Ngày Tủ Vong" 
                className="input0" 
                name = "Date2"
                onChange={handleAddFormChange}    
            />
            <br />
            <button className ="button0"
            onSubmit = {handleAddFormSubmit}
            >Submit</button>
            <button className ="button0"
            onClick = {() => {closesModal(false);}}
            >Close</button>
        </div>
        </form>
    );
}

export default Modal_add_user;