import React from "react";
// import { useState } from "react";
// import axios from "axios";
import { Button } from "@mui/material";

function Quantum() {

  const data = [
    {
        "subjectName": "Engineering Chemistry Quantum",
        "subjectCode": "BAS102/202",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1Bws5GPBXY0s3VoAR2anVwPBjKjHEqg_O&export=download&authuser=1&confirm=t&uuid=a5399a74-3cbb-4905-8d3e-3d5d4bb8e210&at=APZUnTXCRmszV_ha41Uonc7aVMq3:1695650840847"
    },
    {
        "subjectName": "Engineering Physics Quantum",
        "subjectCode": "BAS101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1DoXo_J8pUayep-DMk4_dseBvc0ah2iRU&export=download&authuser=1&confirm=t&uuid=702f0fc5-6df9-495b-af2b-b016c0a80dd0&at=APZUnTXDt2ang3-Qww8AMNF3rNqt:1695650725476"
    },
    {
        "subjectName": "Engineering Mathematics-1 Quantum",
        "subjectCode": "BAS103",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=198A1TYZh9jicaUgOwDEoKE8_ODzzQgIT&export=download&authuser=1&confirm=t&uuid=96bb673e-ca6d-47e8-a61e-30ba47cc44d0&at=APZUnTUlarsJE1fs7jscNFUaJlfH:1695651036890"
    },
    {
        "subjectName": "Electrical Engineering Quantum",
        "subjectCode": "BEE101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1Ai-93TDhmTFVPxOFKuadA_KQ93Gub2ya&export=download&authuser=1&confirm=t&uuid=5b9c30ea-5c19-41ce-8455-1a4c74a3ac0a&at=APZUnTUhz7o4t2rD6sCaC9gwkOkf:1695651063250"
    },
    {
        "subjectName": "Electronics Engineering Quantum",
        "subjectCode": "BEC101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1Bo_5wfCjtzcw026zr-Igohot1xcKIBnU&export=download&authuser=1&confirm=t&uuid=d41a13e3-4ae4-4d6d-bca3-a308c28470ac&at=APZUnTV7nggzbtalItoL0yRt_7vu:1695651077092"
    },
    {
        "subjectName": "Fundamentals of Mechanical Engineering (FMEM) Quantum",
        "subjectCode": "BME101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1DebxO1nO6KQmydNdz--nNFoXHNgrYHDB&export=download&authuser=1&confirm=t&uuid=02409916-9255-410b-9bd7-f299ef066583&at=APZUnTXshGtI-nwu_g0145BO6Hhc:1695651118424"
    },
    {
        "subjectName": "Programming for Problem Solving (PPS) Quantum",
        "subjectCode": "BCS101/201",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1ApHeV-93_FFoHVRZICnGbV7lCtkVNSDh&export=download&authuser=1&confirm=t&uuid=22e8c2b4-97c6-4a70-b26b-daaa8920c438&at=APZUnTWj1SSMnzXxYFj_rQyVIVcl:1695651130843"
    },
    {
        "subjectName": "Environment and Ecology (EVAE) Quantum",
        "subjectCode": "BAS104/204",
        "quantumsUrl": "https://collegezio.mayankpal.in/"
    },
    {
        "subjectName": "Soft Skills Quantum",
        "subjectCode": "BAS105/205",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=18PbGXD4crzU-PsanSJB_HqsHd3sZyrjO&export=download&authuser=1&confirm=t&uuid=a1f33c73-509b-4b81-97cd-e8ec3d45b48f&at=APZUnTXbyt0a83q_mGfXuZFIoP4q:1695651141000"
    },
    {
        "subjectName": "Engineering Mathematics-2 Quantum",
        "subjectCode": "BAS203",
        "quantumsUrl": "https://drive.usercontent.google.com/download?id=1EeNCpRTk0pybz_0oaD4T6M7GCxGY0O_x&export=download&authuser=1&confirm=t&uuid=eb84fb74-a876-4ee5-af67-28f29918929b&at=APZUnTVzCisPgQVHCBXt0WbWhD0S:1695651104480"
    }
]

  function funData(){
    return(
      <>
    {data.map((item)=>(
  <div className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
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
    <h1>B.Tech 1st Year Quantums</h1>
    {funData()}
      <hr />
    </div>
    </div>
  );
}

export default Quantum;
