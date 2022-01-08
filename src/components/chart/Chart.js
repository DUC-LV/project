import React, {useState, useEffect} from "react";
import SelectArea from "./SelectArea";
import { Line } from 'react-chartjs-2';
import './Chart.css';

const globalData =
    {   
        "Hà Nội" : 
        {
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
        },
        "Thành Phố Hồ Chí Minh":
        {
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
           
        },
        "Hải Phòng":
        {
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
            
        },
        "Bắc Giang":
        {
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
            
        }
    }

function Chart() {
    const [data, setData] = useState(globalData);
    const [listAreas, setListAreas] = useState(() => (Object.keys(data)));
    const [dataCharts, setDataChart] = useState(data[listAreas[0]]);

    const handleChangeArea = (area) => {
        console.log(area);
        setDataChart(data[area]);
    }

    const selectProps = {listAreas, data: dataCharts, handleChangeArea};
    const valuesData = Object.values(dataCharts);
    return (
      <div className="Line__Chart">
          <SelectArea selectProps={selectProps} />
          <Line
            data={{
              labels: Object.keys(dataCharts),
              datasets: [{
                data: valuesData.map((item) => (item.Cases)),
                label: 'Cases',
                borderColor: '#3333ff',
                fill: true,
              }, {
                data: valuesData.map((item) => (item.Death)),
                label: 'Death',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                fill: true,
              },  {
                data: valuesData.map((item) => (item.CuredCase)),
                label: 'CuredCase',
                borderColor: 'green',
                backgroundColor: 'rgba(0, 255, 0, 0.5)',
                fill: true,
              },
            ],
            }}
          />
      </div>
  );
}
export default Chart;