import React from "react";
import Header_admin from './Header_admin';
import Footer from '../Footer';
import Menu_Admin from './Menu_admin';
import Trangchu  from "../Trangchu";
import Bantin from '../Bantin';


function Home_admin(props){

    const pathname = window.location.pathname;
    console.log(pathname);

    return (
        <div>
            <Header_admin />
            <Menu_Admin />
            <div className='Home__Content'>
                {
                    pathname === '/trangchu' ? < Trangchu /> : ''
                }
                {
                    pathname === '/bantin' ? < Bantin /> : ''
                }
                
            </div>
            <br></br> <br></br>
            <Footer />
        </div>
    );
}
export default Home_admin;