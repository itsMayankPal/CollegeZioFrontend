import React from 'react'
import { Button } from '@mui/material';

export default function Playlists() {

  const data = [
    {
      "subjecName": "Database Management System (DBMS)",
      "subjectUrl": "https://youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc&si=YoRRiXhyHe1Botq9"
    },
    {
      "subjecName": "Data Structures",
      "subjectUrl": "https://youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU&si=P8g-50ht5n2kGCfA"
    },
    {
      "subjecName": "Energy Science & Engineering",
      "subjectUrl": "https://youtube.com/playlist?list=PL4tW3YRrbN7_QsAz-IbCMZHff_9JE8DoK&si=RgApQncsRS98rYUy"
    },
    {
      "subjecName": "Computer Organization and Architecture",
      "subjectUrl": "https://youtube.com/playlist?list=PLxCzCOWd7aiHMonh3G6QNKq53C6oNXGrX&si=xjCTEWseLJZQ8fHW"
    },
    {
      "subjecName": "Technical Communication",
      "subjectUrl": "https://youtube.com/playlist?list=PL-vEH_IPWrhCwwWWdlDMei7wSA4YFJdjH&si=DBwWdCRHx7p-9H9n"
    },
    {
      "subjecName": "Discrete Structure & Theroy of Logic",
      "subjectUrl": "https://youtube.com/playlist?list=PL5Dqs90qDljU_SwX1YUZ8JfyAkqmho3UP&si=imyhO-iJGIDOfhDy"
    },
    {
      "subjecName": "Cyber Security",
      "subjectUrl": "https://youtube.com/playlist?list=PLBvTTYUOHEmesN4KgO3wd1h0ERWq2t6Al&si=WxODwdK6HeC91bpU"
    },
    {
      "subjecName": "Python Programming",
      "subjectUrl": "https://youtube.com/playlist?list=PLDt-fuLi9lO8SFMFaK7tabCxowLsEuWoy&si=PXNJ9_x2MvfIGxHi"
    }

  ]

  function funData(){
    return(
      <>
    {data.map((item)=>(
  <div style={{height: '150px'}} className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
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
      <h1>B.Tech 2nd Year Playlists</h1>
      {funData()}
      </div>
  )
}
