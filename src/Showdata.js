import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';

const Showdata = () => {
    const getDataRequest = async (s) => {
        const url = 'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all';
        const resp = await fetch(url);
        const respJson = await resp.json();
        setData(respJson[0]);
    };

    const [data, setData] = useState(
        {
          "txn_date": "-",
          "new_case": 0,
          "total_case": 0,
          "new_case_excludeabroad": 0,
          "total_case_excludeabroad": 0,
          "new_death": 0,
          "total_death": 0,
          "new_recovered": 0,
          "total_recovered": 0,
          "update_date": "-"
        }
    );

    useEffect(()=>{
        getDataRequest();
      },[])

    return(
        <>
        <Fade bottom>
            <div className="header-text">
                <div style={{fontWeight:600, fontSize:'2rem'}} >
                สถานการณ์การติดเชื้อ COVID-19 ในประเทศไทย
                </div>
                <div style={{fontWeight:300, fontSize:'1rem'}}>
                ข้อมูล ณ เวลา {data.update_date}
                </div>
            </div>
        </Fade>
        <div className="container">
            <Fade bottom>
            <div className="item" id="new_case">
                <span style={{fontSize:'1.2rem'}}>ผู้ป่วยรายใหม่</span>
                <span style={{fontSize:'3rem', fontWeight:600}}>{data.new_case.toLocaleString()}</span>
            </div>
            </Fade>
            <Fade bottom>
            <div className="item" id="new_death">
                <span style={{fontSize:'1rem'}}>ผู้ป่วยตายรายใหม่</span>
                <span style={{fontSize:'2rem', fontWeight:600}}>{data.new_death.toLocaleString()}</span>
            </div>
            </Fade>
            <Fade bottom>
            <div className="item" id="total_death">
                <span style={{fontSize:'1rem'}}>ผู้ป่วยตายสะสม</span>
                <span style={{fontSize:'2rem', fontWeight:600}}>{data.total_death.toLocaleString()}</span>
            </div>
            </Fade>
        </div>

        <div className="container">
            <Fade bottom>  
             <div className="item" id="total_case">
                <span style={{fontSize:'1rem'}}>ผู้ป่วยสะสม</span>
                <span style={{fontSize:'2rem', fontWeight:600}}>{data.total_case.toLocaleString()}</span>
            </div>
            </Fade>
            <Fade bottom>
            <div className="item" id="new_recovered">
                <span style={{fontSize:'1rem'}}>ผู้ป่วยรักษาหายรายใหม่</span>
                <span style={{fontSize:'2rem', fontWeight:600}}>{data.new_recovered.toLocaleString()}</span>
            </div>
            </Fade>
            <Fade bottom>
            <div className="item" id="total_recovered">
                <span style={{fontSize:'1rem'}}>ผู้ป่วยรักษาหายสะสม</span>
                <span style={{fontSize:'2rem', fontWeight:600}}>{data.total_recovered.toLocaleString()}</span>
            </div>
            </Fade>
        </div>

        <Fade bottom>
            <div className="bottom-text">
            <div style={{fontSize:'10px'}} >
                    ข้อมูลจาก Department of Disease Control | covid19.ddc.moph.go.th
            </div>
            <div style={{fontSize:'6px'}} >
                Created by : Tar Jatupol
            </div>
            </div>
        </Fade>
        </>
    )
}

export default Showdata;