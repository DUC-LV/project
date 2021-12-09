import React from 'react';
import Modal_login from './Modal_login';
import Modal_register from './Modal_register';
import {useState} from 'react';




function Header() {
    const [openModal,setOpenModal] = useState(false);
    const [showModal,setShowModal] = useState(false);
    return (
        <>
        <div className="header">
            <div className="head">
                <img src="https://static.mediacdn.vn/covid19.gov.vn/image/logo.png" alt="" className="pictrue" />
                <h3 className="title">Cổng Thông Tin Của Bộ Y Tế Về Covid-19</h3>
                <input type="text" className="head-input" placeholder="Nhập từ khóa" />
                <a href="" className="head-search">
                    <i className="fas fa-search" />
                </a>
                <button className="head-but1" 
                onClick = {() => {setOpenModal(true);}}>
                Đăng Nhập</button>
                <button className="head-but2" 
                onClick = {() => {setShowModal(true);}}>
                Tạo Tài Khoản</button>
                </div>
        </div>
        {openModal && <Modal_login closeModal ={setOpenModal} />}
        {showModal && <Modal_register closesModal ={setShowModal} />}
        </>
    );
}
export default Header;