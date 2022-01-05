import React from "react";
import '../../css/selectArea.css';
import { useState } from "react";
//import{LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import {  Line } from "react-chartjs-2";




function SelectArea (){
    
    const [area,setArea] = useState(-1);
    const [data,setData] = useState({
        Cases:0,
        CuredCase:0,
        Death:0,
    });
    const [listDate,setDate] = useState();
    const handleSelectArea = (e) =>{
        const ans = +e.target.value;
        if(ans < 0){
            setDate(null);
            return ;
        }
        const txt = dataChart[Areas[ans]];
        console.log("a",txt);
        const dates = Object.keys(txt);
        console.log("k",dates);
        setDate(dates);
        console.log("b",dates[dates.length-1]);
        setData(txt[dates[dates.length-1]]);
    }
    
    const handleSelectDay = (event) =>{
        const day = +event.target.value;
        if(day < 0){
            setDate(null);
            return;
        }
        const days = dataChart[Areas[day]];
        console.log("d",days);
        const fist_day = Object.keys(days);
        console.log("h",fist_day);
        setDate(fist_day);
        //console.log("ta",fist_day[fist_day.length-1]);
        for(let i = 0; i < fist_day.length;i++){
            console.log("ta",fist_day[fist_day.length-1-i]);
            setData(days[fist_day[fist_day.length-1-i]]);
        }
    }
    const Areas = Object.keys(dataChart);
    return(
        <form>
{/*Select Area */} 
            <select className="select" onChange={handleSelectArea}>
                <option value={-1}>Khu Vực</option>
                { Areas && Areas.map((option,index) => (
                <option value={index}>{option}</option>
                ))} 
            </select>

            <select className="select" onChange={handleSelectDay}>
                <option value={-1}>Ngày</option>
                {listDate && listDate.map((item,index)=>(
                    <option value={index}>{item}</option>
                ))}
            </select>
{/*Hiển thị value*/}            
            <div className="FormValue">
                <div className="ValueCases">
                    <p>Số ca mắc</p>
                    <p className="title-value"
                    >{data.Cases}</p>
                </div>
                <div className="ValueCuredCase">
                    <p>Số ca khỏi</p>
                    <p className="title-value"
                    >{data.CuredCase}</p>
                </div>
                <div className="ValueDeaths">
                    <p>Số ca tử vong</p>
                    <p className="title-value"
                    >{data.Death}</p>
                </div>
            </div>
{/*Biểu đồ*/}
            <h1>LineChart</h1>
            
        </form>
    );
}
export default SelectArea;
const dataChart =
    {   
        
        "Hà Nội" : {
                "20/12/2021":{
                    Cases:1200,
                    CuredCase:801,
                    Death:10,
                },
            
                "21/12/2021":{
                    Cases:3046,
                    CuredCase:905,
                    Death:12,
                },
                "22/12/2021":{
                    Cases:1200,
                    CuredCase:706,
                    Death:8,
                },
                "23/12/2021":{
                    Cases:806,
                    CuredCase:1100,
                    Death:12,
                
                },
                "24/12/2021":{
                    Cases:3201,
                    CuredCase:900,
                    Death:11,
                },
                "25/12/2021":{
                    Cases:4200,
                    CuredCase:1100,
                    Death:12,
                },
                "26/12/2021":{
                    Cases:4320,
                    CuredCase:1100,
                    Death:10,
                },
                "Tổng":{
                    Cases:40646,
                    CuredCase:32631,
                    Death:1200,
                }
            },
            "Thành Phố Hồ Chí Minh":{
                "20/12/2021":{
                    Cases:3021,
                    CuredCase:1210,
                    Death:9, 
                },
                "21/12/2021":{
                    Cases:4096,
                    CuredCase:1240,
                    Death:110,
                },
                "22/12/2021":{
                    Cases:6021,
                    CuredCase:1409,
                    Death:234,
                },
                "23/12/2021":{
                    Cases:7084,
                    CuredCase:3002,
                    Death:206,
                },
                "24/12/2021":{
                    Cases:4028,
                    CuredCase:2064,
                    Death:203,
                },
                "25/12/2021":{
                    Cases:6021,
                    CuredCase:3046,
                    Death:301,
                },
                "26/12/2021":{
                    Cases:4062,
                    CuredCase:2106,
                    Death:102,
                },
                "Tổng":{
                    Cases:501930,
                    CuredCase:302641,
                    Death:12096,
                }
            },
            "Hải Phòng":{
                "21/12/2021":{
                    Cases:102,
                    CuredCase:90,
                    Death:5,
                },
                "22/12/2021":{
                    Cases:101,
                    CuredCase:71,
                    Death:9,
                },
                "23/12/2021":{
                    Cases:202,
                    CuredCase:40,
                    Death:6,
                },
                "24/12/2021":{
                    Cases:80,
                    CuredCase:100,
                    Death:6,
                },
                "25/12/2021":{
                    Cases:69,
                    CuredCase:40,
                    Death:4,
                },
                "26/12/2021":{
                    Cases:80,
                    CuredCase:39,
                    Death:2,
                },
                "Tổng":{
                    Cases:7021,
                    CuredCase:5036,
                    Death:40,
                }
            },
            "Bắc Giang":{
                "21/12/2021":{
                    Cases:110,
                    CuredCase:80,
                    Death:3,
                },
                "22/12/2021":{
                    Cases:201,
                    CuredCase:106,
                    Death:4,
                },
                "23/12/2021":{
                    Cases:80,
                    CuredCase:100,
                    Death:6,
                },
                "24/12/2021":{
                    Cases:110,
                    CuredCase:40,
                    Death:2,
                },
                "25/12/2021":{
                    Cases:201,
                    CuredCase:89,
                    Death:9,
                },
                "26/12/2021":{
                    Cases:69,
                    CuredCase:41,
                    Death:9,
                },
                "Tổng":{
                    Cases:7687,
                    CuredCase:6021,
                    Death:80,
                }
            }
        }
    
    
    //     "Thành Phố Hồ Chí Minh" : {
    //         {   
    //             date:"20/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"21/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"22/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"23/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"24/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"25/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {   
    //             date:"26/12/2021",
    //             valuePeople:{
    //                 Cases:900,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //     ],
    
    
    //     "Hải Phòng" : [
    //         {
    //             date:"20/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"21/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"22/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"23/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"24/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"25/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //         {
    //             date:"26/12/2021",
    //             valuePeople:{
    //                 Cases:1200,
    //                 CuredCase:100,
    //                 Death:9,
    //             }
    //         },
    //     ],
    //     "Bắc Giang" : [
    //         {
    //             date:"20/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"21/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"22/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"23/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"24/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"25/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         },
    //         {
    //             date:"26/12/2021",
    //             valuePeople:{
    //                 Cases:600,
    //                 CuredCase:100,
    //                 Death:10,
    //             }
    //         }
    //     ]
    //}
    
