import React from "react";
// import { useState } from "react";
// import axios from "axios";
import { Button } from "@mui/material";

function Quantum() {

  const data = [
    {
        "subjectName": "Computer Organization Architecture",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=197TtohgiNiWcZsVk4wBaYjFgGzN6d8VD&export=download&authuser=1&confirm=t&uuid=82bd7fdf-1f16-49bd-86a6-1bbe5fbfb05f&at=APZUnTWx6dMJS-U-E1FcZxBDD5XZ:1700132032369"
    },
    {
        "subjectName": "Data Structures",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=19-9B53rNiPgd4XXj3UEMrdACGlaGq2eM&export=download&authuser=1&confirm=t&uuid=7f540795-40e7-4192-972a-f4f949073c3c&at=APZUnTWh4yscAz1GvqPqcXABk-WD:1700132043924"
    },
    {
        "subjectName": "Discrete Structure and Theory of Logic",
        "subjectCode": "BAS103",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=18zekQs7WcizIqSgkyQnFKP1lYXxwM8Sj&export=download&authuser=1&confirm=t&uuid=d7ff0133-c688-40f3-9fb5-0a92a528bd19&at=APZUnTXGhVzd12OpMPUF_HN_6yND:1700132051207"
    },
    {
        "subjectName": "Energy Science & Engineering",
        "subjectCode": "BEE101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=196ZDT4BGBdyp84Lw6m__fM-hEpjuDu08&export=download&authuser=1&confirm=t&uuid=1d49d0f9-887d-4608-91fb-a0032d1476df&at=APZUnTXZRomC8Ah6pJT26DxMw0QF:1700132060199"
    },
    {
        "subjectName": "Technical Communication",
        "subjectCode": "BEC101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=18xRrYtl4i5fl-OU-wXp9tDdnybao2SL4&export=download&authuser=1&confirm=t&uuid=58bc6c2e-9b3c-4f95-b399-c9c427793a4f&at=APZUnTWoah5M9c482pSuo1u9T7Sc:1700132068314"
    }
]

  function funData(){
    return(
      <>
    {data.map((item)=>(
  <div style={{height: '150px'}} className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
  <div className="bg-my p-3 text-center">
  <p className="font-gradient3 subName font-founder">
    {item.subjectName}
  </p>
  <Button onClick = {()=> window.open(item.quantumsUrl, "_blank", "noreferrer")}>
    Download
  </Button>
  </div>
  </div>
))}
</>
    )
  }
  
   
  return (
    <div className="container d-flex align-item-center justify-content-center">
        <div className="container">
    <h1>B.Tech 2nd Year Quantums</h1>
    {funData()}
      <hr />
    </div>
    </div>
  );
}

export default Quantum;
