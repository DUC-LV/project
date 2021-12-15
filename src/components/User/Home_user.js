import React from "react";
import Header_user from './Header_user';
import Menu_user from './Menu_user';
import Footer from '../Footer';


function Home_user(props){
    return (
        <>
        <div>
            <Header_user />
        </div>
        <div>
            <Menu_user />
        </div>
        <div>
            <Footer />
        </div>
        </>
    );
}
export default Home_user;