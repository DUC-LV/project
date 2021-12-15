import React from "react";
import '../css/xemthongtin.css';
import Modal_add_user from '../components/User/Modal_add_user';
import {useState} from 'react';


function Xemthongtin(){
    const [opModal,setopModal] = useState(false); 
    
    return (
        <>
        <div className ="table">
            <h2 className ="table-title">Thông tin người dùng</h2>
            <button className = "table-button"
            onClick = {() => {setopModal(true);}}
            > Add-user </button>
            <br></br> <br></br>
            <table className ="table-user">
                <tr>
                    <th>STT</th>
                    <th>SĐT/Email</th>
                    <th>Địa chỉ</th>
                    <th>Mật khẩu</th>
                    <th>Tên</th>
                    <th>Số CCCD</th>
                    <th>Người tạo tài khoản</th>
                    <th>Trạng thái</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>0123456789</td>
                    <td>Số 8-Lạc Trung-Hà Nội</td>
                    <td>*******</td>
                    <td>Lê Văn A</td>
                    <td>0460035568</td>
                    <td>Admin</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>0123456789</td>
                    <td>Số 8-Lạc Trung-Hà Nội</td>
                    <td>*******</td>
                    <td>Lê Văn A</td>
                    <td>0460035568</td>
                    <td>Admin</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
                <tr>
                     <td>3</td>
                    <td>0123456789</td>
                    <td>Số 8-Lạc Trung-Hà Nội</td>
                    <td>*******</td>
                    <td>Lê Văn A</td>
                    <td>0460035568</td>
                    <td>Admin</td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </table>
        </div>
        {opModal && <Modal_add_user closesModal ={setopModal} />}
        </>
    );
}
export default Xemthongtin;