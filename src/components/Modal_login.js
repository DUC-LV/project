import React from 'react';


 function Modal_login({closeModal}) {
     return (
        <div className="login hide">
            <div className="login-iner">
                <div className="login-left">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/logo.png" alt="" className="login-left-image" />
                    <h3 className="login-left-title">PC-COVID</h3>
                    <p className="login-left-head">CỔNG THÔNG TIN CỦA BỘ Y TẾ VỀ COVID-19</p>
                </div>
                <div className="login-right">
                    <h3 className="login-right-head">Đăng Nhập</h3>
                    <input type="text" placeholder="Email hoặc số điên thoại" className="login-right-input1" />
                    <input type="password" placeholder="Mật khẩu" className="login-right-input2" />
                    <button className="login-right-button" 
                    onClick = {() => {closeModal(false);}}>
                    Đăng Nhập</button>
                    <a href="#" className="right-link">
                        <h4 className="right-link-head">Quên mật khẩu?</h4>
                    </a>
                </div>
            </div>
        </div>
     );
 }
 export default Modal_login;
