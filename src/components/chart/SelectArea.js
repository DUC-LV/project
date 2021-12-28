import React from "react";
import '../../css/selectArea.css';
import { useState } from "react";
import{LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




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
        console.log(txt);
        const dates = Object.keys(txt);
        setDate(dates);
        console.log(dates[dates.length-1]);
        setData(txt[dates[dates.length-1]]);
    }
    const Areas = Object.keys(dataChart);
    console.log(Areas);
    return(
        <form>
{/*Select Area */} 
            <select className="select" onChange={handleSelectArea}>
                <option value={-1}>Khu Vực</option>
                { Areas && Areas.map((option,index) => (
                <option value={index}>{option}</option>
                ))} 
            </select>

            <select className="select">
                <option>Ngày</option>
                {listDate && (listDate.map((item,index)=>(
                    <option value={index}>{item}</option>
                )))}
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
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width="500px" height = "300px"
                data = {dataChart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Cases" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="CuredCase" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="Death" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </form>
    );
}
export default SelectArea;
const dataChart =
    {   
        
        "Hà Nội" : {
                "20/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                },
            
                "21/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                },
                "22/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                },
                "23/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                
                },
                "24/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                },
                "25/12/2021":{
                    Cases:1200,
                    CuredCase:1100,
                    Death:10,
                },
                "26/12/2021":{
                    Cases:120,
                    CuredCase:110,
                    Death:10,
                }
            },
            "Thành Phố Hồ Chí Minh":{
                "20/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9, 
                },
                "21/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "22/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "23/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "24/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "25/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "26/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "Tổng":{
                    Cases:9000,
                    CuredCase:1000,
                    Death:90,
                }
            },
            "Hải Phòng":{
                "21/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "22/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "23/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "24/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "25/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "26/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
            },
            "Bắc Giang":{
                "21/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "22/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "23/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "24/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "25/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
                "26/12/2021":{
                    Cases:900,
                    CuredCase:100,
                    Death:9,
                },
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
    
