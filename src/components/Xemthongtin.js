import React from "react";
import '../css/xemthongtin.css';
import Modal_add_user from '../components/User/Modal_add_user';
import {useState} from 'react';
import data from '../mock-data.json';
import EditUser from '../components/EditUser';
import EditForm from "../components/EditForm";

function Xemthongtin(){

    const [contacks,setcontacks] = useState(data);
    const addNewContact = (contact) => {
        setcontacks( [...contacks,contact])
    }
    const [opModal,setopModal] = useState(false);
    
    // edit

    const [editContactID , setEditContactID] = useState(null);
    const edit = (contact) => {
        setEditContactID([...editContactID,contact]);
    }
    const handleEdit = (event,contact) => {
        event.preventDefault();
        setEditContactID(contact.ID);
        const formValues = {
            ID:contact.ID,
            Name: contact.Name,
            Number: contact.Number,
            Address: contact.Address,
            Area: contact.Area,
            Date: contact.Date,
            Date1: contact.Date1,
            Date2: contact.Date2
        }
        setEditFormData(formValues);
    }
    const [editFormData,setEditFormData] = useState({
        ID: '',
        Name : '',
        Number : '',
        Address : '',
        Area : '',
        Date : '',
        Date1 : '',
        Date2 : ''
    })
   
    const handleEditFormSubmit = (c) => {
        let newContacts =contacks.map((contact) =>{
            if(contact.ID === c.ID ){
                console.log("hahahahahaha");
                return c;
            }
            return contact;
        });
        setcontacks(newContacts);
        setEditContactID(null);
    }
    
    // delete
    const handleDelete = (contactId) =>{
        const newContacts = [...contacks];
        const index = contacks.findIndex((contact) => contact.ID === contactId);
        newContacts.splice(index,1);
        setcontacks(newContacts);
        
    }

    return (
        <form>
        
        <div className ="table">
            <h2 className ="table-title">Thông tin người dùng</h2>
            <button className = "table-button"
            onClick = {(e) =>{e.preventDefault();setopModal(true);}}
            > Add-user </button>
            <br></br> <br></br>
                <div className = "table-user">
                    <table>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Họ Tên</th>
                                <th>Số CCCD</th>
                                <th>Địa Chỉ</th>
                                <th>Khu Vực</th>
                                <th>Ngày Nhiễm Bệnh</th>
                                <th>Ngày Khỏi Bệnh</th>
                                <th>Ngày Tử Vong</th>
                                <td>Trạng Thái</td>
                            </tr>
                        </thead>
                        <tbody>
                            {contacks.map((contact,index) => (
                                <>
                                {editContactID === contact.ID ? 
                                (<EditForm editFormData ={editFormData}
                                handleEditFormSubmit = {handleEditFormSubmit}
                                edit = {edit}
                                index1 = {index}
                                 />):
                                (<EditUser contact = {contact} 
                                handleEdit = {handleEdit}
                                index1 = {index}
                                handleDelete = {() =>handleDelete(contact.ID)}
                                 />)}
                                </>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
        {opModal && <Modal_add_user closesModal ={setopModal} 
        contacks={contacks} 
        addNewContact = {addNewContact}  />}
        </form>
    );
}
export default Xemthongtin;
