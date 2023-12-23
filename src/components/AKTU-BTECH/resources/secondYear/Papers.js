import React from "react";
import { Button } from "@mui/material";

function Paper() {
  const data = [
    {
      subjectName: "Compute Organisation & Architecture",
      papersUrl:
        "https://drive.google.com/drive/u/1/folders/1FHDXuVyGbnwz_dQ7RZXtF5mzft44yKw-"
    },
    {
      subjectName: "Data Strucute",
      subjectCode: "BAS202//102",
      papersUrl:
        "https://drive.google.com/drive/u/1/folders/1F0xLcO0ScTBIC9yvjORcjxSLDA1sp2s-"
    },
    {
      subjectName: "Discrete Structure and Theory of Logic",
      subjectCode: "BAS102/202",
      papersUrl:
        "https://drive.google.com/drive/u/1/folders/1FaGZUcth4GV_jxoW2pCvPpK26_LjV6rl"
    },
    {
      subjectName: "Energy Science & Engineering",
      subjectCode: "BAS102//202",
      papersUrl:
        "https://drive.google.com/drive/u/1/folders/1G5uI37X7Oen8l7eGKuU8lsoJORoMkoi9"
    },
    {
      subjectName: "Technical Commuincation",
      subjectCode: "BEC101/201",
      papersUrl:
        "https://drive.google.com/drive/u/1/folders/1Fvq826cd-M1Ji504j8vYb0FnAB7FQu07"
    }
  ];

  function funData() {
    return (
      <>
        {data.map((item) => (
          <div style={{height: '150px'}} className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
            <div className="bg-my p-3 text-center">
              <p className="font-gradient3 subName font-founder">
                {item.subjectName}
              </p>
              <Button
                onClick={() =>
                  window.open(item.papersUrl, "_blank", "noreferrer")
                }
              >
                Open
              </Button>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="container d-flex align-item-center justify-content-center">
      <div className="container">
        <h1>B.Tech 2nd Year Papers</h1>
        {funData()}
        <hr />
      </div>
    </div>
  );
}

export default Paper;
