import React from "react";
// import Download from "./Download";
import { useState } from "react";
import axios from "axios";
// import { quantum_list } from "../assets/quantums";
import logo from "../collegezio.jpeg";
import { Button } from "@mui/material";

// let itemList = quantum_list.map((item, index) => {
//   return (
//     <>
//     <hr />
//       <div className="container d-flex flex-column bg-my mt-4 rounded-3 text-center align-content-center">
//         <div className="container align-content-center p-5">
//           <img src={logo} className="App-logo" alt="logo" />
//         </div>

//         <b>
//           <span className="font-gradient4 display-2 font-founder align-self-center">
//             Subject Name:{" "}
//           </span>
//         </b>
//         <p className="font-gradient3 display-1 subName font-founder align-self-center">
//           <i>{item.name}</i>
//         </p>
//         <p className="font-gradient5 display-3 subName font-founder align-self-center">
//           Subject Code: <i>{item.id}</i>
//         </p>

//         <Download x={item.url}></Download>
//       </div>
//     <hr />
//       {/* <li key={index}>{item['name']}</li> */}
//     </>
//   );
// });

// function Quantum() {
//   return (
//     <div className="container">
//       {itemList}
//       {/* <Download></Download> */}
//       {/* <Button onClick={itemList}>hello</Button> */}
//     </div>
//   );
// }
function Quantum() {
  let [quantumlist, setQuantumlist] = useState([])
  
  axios.get('http://localhost:5005/quantums').then((res)=>{
    setQuantumlist(res.data)
    // console.log(quantum_list)
  }
  )

let itemList = quantumlist.map((item, index) => {
  return (
    <>
    <hr />
      <div className="container d-flex flex-column bg-my mt-4 rounded-3 text-center align-content-center">
        <div className="container align-content-center p-5">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <b>
          <span className="font-gradient4 display-2 font-founder align-self-center">
            Subject Name:{" "}
          </span>
        </b>
        <p className="font-gradient3 display-1 subName font-founder align-self-center">
          <i>{item.subjectName}</i>
        </p>
        <p className="font-gradient5 display-3 subName font-founder align-self-center">
          Subject Code: <i>{item.subjectCode}</i>
        </p>

        <Button onClick={()=>`window.open(item.quantumsUrl, "_blank", "noreferrer")}>Download</Button>
      </div>
    <hr />
      {/* <li key={index}>{item['name']}</li> */}
    </>
  );
});
// console.log(quantum_list)

// myFun();
  
   
  return (
    <div className="container d-flex align-item-center justify-content-center">
        <div className="container">
      {itemList}
      {/* <Download></Download> */}
      {/* <Button onClick={itemList}>hello</Button> */}
    </div>
    </div>
  );
}

export default Quantum;
