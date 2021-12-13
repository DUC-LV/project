import React from 'react';
import '../css/footer.css';

function Footer (){
    return (
        <div className="footer">
            <div className="footer-head">
                <h2 className="footer-head-title">Liên Kết</h2>
                <a href="http://chinhphu.vn/portal/page/portal/chinhphu/trangchu">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/link6.jpg" alt="" className="footer-head-pictrue" />
                </a>
                <a href="https://moh.gov.vn/">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/link1.jpg" alt="" className="footer-head-pictrue" />
                </a>
                <a href="https://suckhoedoisong.vn/">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/partner2.png" alt="" className="footer-head-pictrue" />
                </a>
                <a href="https://giadinh.net.vn/">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/partner_gdn.png" alt="" className="footer-head-pictrue" />
                </a>
                <a href="https://vccorp.vn/">
                    <img src="https://static.mediacdn.vn/covid19.gov.vn/image/vccorp.png" alt="" className="footer-head-pictrue" />
                </a>
            </div>
            <div className="footer-footer">
                <img src="https://static.mediacdn.vn/covid19.gov.vn/image/logo.png" alt="" className="footer-footer-pictrue" />
                <h3 className="footer-footer-title">QUẢN LÝ NỘI DUNG: BÁO SỨC KHỎE VÀ ĐỜI SỐNG - CƠ QUAN NGÔN LUẬN CỦA BỘ Y TẾ</h3>
                <p className="footer-footer-title1">Đường dây nóng:19009095</p>
                <p className="footer-footer-title2">Email:covid19@suckhoedoisong.vn</p>
            </div>
      </div>
    );
}


export default Footer;