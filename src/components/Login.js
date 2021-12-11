import React from 'react';

function Login() {
    return (
        <div>
            <div className="left">
                <img src="https://static.mediacdn.vn/covid19.gov.vn/image/logo.png" alt="" className="left-image" />
                <h3 className="left-title">PC-COVID</h3>
                <p className="left-head">CỔNG THÔNG TIN CỦA BỘ Y TẾ VỀ COVID-19</p>
            </div>
            <div className="right">
                <h3 className="right-head">Đăng Nhập</h3>
                <input type="text" placeholder="Email hoặc số điên thoại" className="right-input1" />
                <input type="password" placeholder="Mật khẩu" className="right-input2" />
                <button className="right-button1">Đăng Nhập</button>
                <a href="#" className="right-link">
                    <h4 className="right-link-head">Quên mật khẩu?</h4>
                </a>
            </div>
        </div>
    );
}
export default Login;