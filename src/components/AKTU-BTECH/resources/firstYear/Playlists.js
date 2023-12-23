import React from 'react'
import { Button } from '@mui/material';

export default function Playlists() {

  const data = [
    {
      "subjecName": "Engineering Physics",
      "subjectUrl": "https://www.youtube.com/@TechnicalPhysics"
    },
    {
      "subjecName": "Engineering Chemistry",
      "subjectUrl": "https://www.youtube.com/@chemistrybydr.anjalissaxena"
    },
    {
      "subjecName": "Electronics Engineering",
      "subjectUrl": "https://youtube.com/playlist?list=PLuab0oz-O1zXypF1rNrmGGEi7g-PagpaG&si=zwHC5kOCX3GRZkOk"
    },
    {
      "subjecName": "Electrical Engineering",
      "subjectUrl": "https://www.youtube.com/@vaibhavjain3854"
    },
    {
      "subjecName": "Engineering Mathematics-1",
      "subjectUrl": "https://www.youtube.com/@BhagwanSinghVishwakarma"
    },
    {
      "subjecName": "Engineering Mathematics-2",
      "subjectUrl": "https://www.youtube.com/@dr.anuj.fearlessinnocentmath"
    },
    {
      "subjecName": "Mechanical Engineering",
      "subjectUrl": "https://youtube.com/playlist?list=PL-vEH_IPWrhBhH9hB8CnZzri1rbfR5maX&si=gRFoHwFWZajMsyoP"
    },
    {
      "subjecName": "Soft Skills",
      "subjectUrl": "https://youtube.com/playlist?list=PLkojphh8hBnZDXhWKq8f36MEsZ_V8VBbd&si=U1CCD5Imm5s0Pp3c"
    },
    {
      "subjecName": "Programming for problem solving",
      "subjectUrl": "https://youtube.com/playlist?list=PLkojphh8hBnZXLw-AV-GcstLhGRJUeS1G&si=69IZRm29ClSShBZH"
    }

  ]

  function funData(){
    return(
      <>
    {data.map((item)=>(
  <div className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
  <div className="bg-my p-3 text-center">
  <p className="font-gradient3 subName font-founder">
    {item.subjecName}
  </p>
  <Button onClick = {()=> window.open(item.subjectUrl, "_blank", "noreferrer")}>
    Open
  </Button>
  </div>
  </div>
))}
</>
    )
  }

  return (
    <div className='container'>
      <h1>B.Tech 1st Year Playlists</h1>
      {funData()}
      </div>
  )
}