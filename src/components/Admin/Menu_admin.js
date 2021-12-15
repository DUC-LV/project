import React from 'react';

function Menu() {
    return (
        <div className = "menu-top">
            <div className="list-menu">
                <ul>
                    <a href="/trangchu">
                        <li>Trang Chủ</li>
                    </a>
                    <a href="/bantin">
                        <li>Bản Tin Covid-19</li>
                    </a>
                    <a href="/vaccin">
                        <li>Vaccin-Tiêm Chủng</li>
                    </a>
                    <a href="/xemthongtin">
                        <li>Xem Thông Tin</li>
                    </a>
                </ul>
            </div>
        </div>
    );
}
export default Menu;