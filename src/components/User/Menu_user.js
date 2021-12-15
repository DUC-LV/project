import React from "react";
import '../../css/menu_user.css';


function Menu_user(){
    return(
        <div className = "menu-user">
            <div className="menu-user_list">
                <ul>
                    <a href="#">
                        <li>Trang Chủ</li>
                    </a>
                    <a href="#">
                        <li>Bản Tin Covid-19</li>
                    </a>
                    <a href="#">
                        <li>Vaccin-Tiêm Chủng</li>
                    </a>
                    <a href="#">
                        <li>Cập nhập thông tin bệnh nhân</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
export default Menu_user