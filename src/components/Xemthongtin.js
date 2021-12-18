import React from "react";
import '../css/xemthongtin.css';
import Modal_add_user from '../components/User/Modal_add_user';
import {useState} from 'react';
import data from '../mock-data.json';





function Xemthongtin(){

    const [contacks,setcontacks] = useState(data);


    
    

    const [opModal,setopModal] = useState(false);
    return (
        <>
        
        <div className ="table">
            <h2 className ="table-title">Thông tin người dùng</h2>
            <button className = "table-button"
            onClick = {() => {setopModal(true);}}
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
                            {contacks.map((contact) => (
                                <tr>
                                    <td>{contact.ID}</td>
                                    <td>{contact.Name}</td>
                                    <td>{contact.Number}</td>
                                    <td>{contact.Address}</td>
                                    <td>{contact.Area}</td>
                                    <td>{contact.Date}</td>
                                    <td>{contact.Date1}</td>
                                    <td>{contact.Date2}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            ))}
                           
                        </tbody>
                    </table>
            </div>
        </div>
        {opModal && <Modal_add_user closesModal ={setopModal} />}
        </>
    );
}
export default Xemthongtin;
