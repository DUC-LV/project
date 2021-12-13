import React from 'react';
import Modal_login from './Modal_login';
import {useState} from 'react';




function Header_user() {
    const [openModal,setOpenModal] = useState(false);
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
                </div>
        </div>
        {openModal && <Modal_login closeModal ={setOpenModal} />}
        </>
    );
}
export default Header_user;