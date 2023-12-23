import React from 'react'
import { Button } from '@mui/material'

export default function Practicals() {
  const data = [
    {
        "Unit": " Technical Communication Unit-1",
        "NotesUrl": "https://drive.google.com/file/d/1HKlfJdw94i_VKlY9wXmvggykKGcLY4_j/view?usp=drive_link"
    },
    {
        "Unit": "Technical Communication Unit-2",
        "NotesUrl": "https://drive.google.com/file/d/1HKoas4dU01MSNNrMqWuVQ0gBHuxQkkUx/view?usp=drive_link"
    },
    {
        "Unit": "Technical Communication Unit-3",
        "NotesUrl": "https://drive.google.com/file/d/1HLIS1PJ2ABZdL6bCu584oi47siNT0Hen/view?usp=drive_link"
    },
    {
        "Unit": "Technical Communication Unit-4",
        "NotesUrl": "https://drive.google.com/file/d/1HNobEnVlqiS9oTu66sKgz0WyJXS3TC2u/view?usp=drive_link"
    },
    {
        "Unit": "Technical Communication Unit-5",
        "NotesUrl": "https://drive.google.com/file/d/1HNrznZ5BwW0R9wIMuo-3SbmWfULDe-aL/view?usp=drive_link"
    },   
  {
    "Unit": " Data Structures Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1H8gwmgpo5VF8nHH8z_Bsb8JseK9UIkZi/view?usp=drive_link"
},
  {
    "Unit": "Data Structures Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1HEN_-Z9Ik7rZiAOEiRUOLO2FUqmef8eP/view?usp=drive_link"
},
  {
    "Unit": "Computer Organization Architecture Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1HY_NXNxBXeJt7PbzgbnZSWgddup8jmDX/view?usp=drive_link"
},
  {
    "Unit": "Computer Organization Architecture Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1HZVmqCSvPNmarPx8RBmG0eRwhm9AnkbM/view?usp=drive_link"
},
  {
    "Unit": "Computer Organization Architecture Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1H_RNUSd65qZBtcFwettIrgH8odHiLpLG/view?usp=drive_link"
},
  {
    "Unit": "Computer Organization Architecture Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1Ha8VRniNiZsVtzIaDFO1lD8AkXaZUUBe/view?usp=drive_link"
},
  {
    "Unit": "Computer Organization Architecture Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1HfITjYYK3cWQToPyobxri_9iZPDxA9Ig/view?usp=drive_link"
},
  {
    "Unit": "Cyber Security Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1HjXhKbHtqHuJgXQbGG9VkrzkkZanRkuq/view?usp=drive_link"
},
  {
    "Unit": "Cyber Security Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1HpUOKdV53mTzC7lB2XHY0hemkjxnWpBu/view?usp=drive_link"
},
  {
    "Unit": "Cyber Security Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1HrX5-eFDx7WGrLpgX7x_mlr3GrikQ5QN/view?usp=drive_link"
},
  {
    "Unit": "Cyber Security Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1I-jqpknXWWqUqI51MQLQQc4zYvP2DXfI/view?usp=drive_link"
},
  {
    "Unit": "Cyber Security Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1I5aSBBviXnMKM7Zk8PSE6J1YGC5Eph0x/view?usp=drive_link"
},
]

function funData(){
  return(
    <>
  {data.map((item)=>(
<div className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
<div className="bg-my p-3 text-center">
<p className="font-gradient2 subName font-founder">
  {item.Unit}
</p>
<Button onClick = {()=> window.open(item.NotesUrl, "_blank", "noreferrer")}>
  Open
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
    <h1> B.Tech 2nd Year Notes</h1>
    {funData()}
      <hr />
    </div>
    </div>
  )
}
