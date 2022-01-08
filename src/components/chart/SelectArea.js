import React from "react";
import '../../css/selectArea.css';
import { useState, useEffect } from "react";
//import{LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import {  Line } from "react-chartjs-2";

function SelectArea ({selectProps}){
    const [listAreas, setListAreas] = useState(selectProps.listAreas);
    const [currentArea, setCurrentArea] = useState(selectProps.listAreas && selectProps.listAreas[0]);
    const [data, setData] = useState(selectProps.data);
    const listDate = Object.keys(data);
    const [currentDate, setCurrentDate] = useState(listDate[listDate.length - 1]);

    useEffect(() => {
        setData(selectProps.data);
    });

    useEffect(() => {
        setCurrentDate(listDate[listDate.length - 1]);
    }, [currentArea]);

    const handleSelectArea = (e) =>{
        const area = e.target.value;
        setCurrentArea(area);
        selectProps.handleChangeArea(area);
    }
    
    const handleSelectDay = (event) =>{
        const day = event.target.value;
        setCurrentDate(day);
    }
    return(
        <form>
{/*Select Area */} 
            <select className="select" onChange={handleSelectArea}>
                { listAreas && listAreas.map((area, index) =>
                    {
                        if(currentArea === area) {
                            return (<option value={area} selected>{area}</option>);
                        }else{
                            return (<option value={area}>{area}</option>);
                        }
                    }
                )} 
            </select>

            <select className="select" onChange={handleSelectDay}>
                {listDate && listDate.map((date,index)=>
                    {
                        if(currentDate === date) {
                            return (<option value={date} selected>{date}</option>);
                        } else{
                            return (<option value={date}>{date}</option>);
                        }
                    }
                )}
            </select>
{/*Hiển thị value*/}            
            <div className="FormValue">
                <div className="ValueCases">
                    <p>Số ca mắc</p>
                    <p className="title-value"
                    >{data[currentDate].Cases}</p>
                </div>
                <div className="ValueCuredCase">
                    <p>Số ca khỏi</p>
                    <p className="title-value"
                    >{data[currentDate].CuredCase}</p>
                </div>
                <div className="ValueDeaths">
                    <p>Số ca tử vong</p>
                    <p className="title-value"
                    >{data[currentDate].Death}</p>
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
    
