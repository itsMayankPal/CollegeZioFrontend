import React from 'react'
import { Button } from '@mui/material'

export default function Practicals() {
  const data = [
    {
        "Unit": "Engineering Chemsitry Unit-1",
        "NotesUrl": "https://drive.google.com/file/d/1CPDj1I1gKGBUaiV1ZI3wkCowRwyUthZZ/view?usp=drive_link"
    },
    {
        "Unit": "Engineering Chemsitry Unit-2",
        "NotesUrl": "https://drive.google.com/file/d/1CCshdTVIDTSyTfduYVgP6v1NkZSpqNXf/view?usp=drive_link"
    },
    {
        "Unit": "Engineering Chemsitry Unit-3",
        "NotesUrl": "https://drive.google.com/file/d/1CRPLRsad8sUP5Py4G8giqhSYLjpMxb7m/view?usp=drive_link"
    },
    {
        "Unit": "Engineering Chemsitry Unit-4",
        "NotesUrl": "https://drive.google.com/file/d/1CpIUQ--AwSBhdZXxVrPqLNSVGjSx7X2L/view?usp=drive_link"
    },
    {
        "Unit": "Engineering Chemsitry Unit-5",
        "NotesUrl": "https://drive.google.com/file/d/1ClGSxfqYw7rGPrDkuiulsbhAdj4LTa2n/view?usp=drive_link"
    },   
  {
    "Unit": " Fundamental of Electronics Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1BLY-3RVNepienarXYRpxrL6md1GQGgwV/view?usp=drive_link"
},
  {
    "Unit": "Fundamental of Electronics Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1BSt9ydvoDpGoy9FZ_6UirVJBhZZ3Lg5r/view?usp=drive_link"
},
  {
    "Unit": "Fundamental of Electronics Unit-4 Extra",
    "NotesUrl": "https://drive.google.com/file/d/1BirHCwyLianXfA97JQXFth6jBajJU7Ds/view?usp=drive_link"
},
  {
    "Unit": "Fundamental of Electronics Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1BXAXoBPCdkSM8AbIRU-K_H7RAe2pAf7y/view?usp=drive_link"
},
  {
    "Unit": "Engg. Mathematics-2 Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1EPuVHN8olzJnRIL9SwMSelwhMlSeNvwR/view?usp=drive_link"
},
  {
    "Unit": "Engg. Mathematics-2 Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1EU69A4EbDI5aLVJzEp9jwzvjchLE7hgW/view?usp=drive_link"
},
  {
    "Unit": "Engg. Mathematics-2 Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1E_d8Xa2D3-Kr3YhD1qz9kue77_jQ07zX/view?usp=drive_link"
},
  {
    "Unit": "Engg. Mathematics-2 Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1EgKZPj9Jn1MRECxynoAKGZ7EkBmOES9O/view?usp=drive_link"
},
  {
    "Unit": "Engg. Mathematics-2 Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1EIGSJZN3d0_qEoUKR01b8c8-xLLvtA0D/view?usp=drive_link"
},
  {
    "Unit": "Mechanincal Engg. Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1DtqYPyYLVSklEoJZ_3hfzNfqj85L98cE/view?usp=drive_link"
},
  {
    "Unit": "Mechanincal Engg. Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1Dpyzk1j7w1e2n21YfXESi-1wEkhOxbjz/view?usp=drive_link"
},
  {
    "Unit": "Mechanincal Engg. Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1E1qc2yb1ojc0b3DKmIRS-KgUs6Q194uT/view?usp=drive_link"
},
  {
    "Unit": "Mechanincal Engg. Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1DuvbrUzri_JokO7VoVlUD29Z0rHwZJYE/view?usp=drive_link"
},
  {
    "Unit": "Mechanincal Engg. Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1Dy-PoY9Gc00asNeD7MPwEOg8AAo0MjPl/view?usp=drive_link"
},
  {
    "Unit": "Engg. Physics Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1DbJzu162ZruFnS_W2o9gypEYhzRmQdVe/view?usp=drive_link"
},
  {
    "Unit": "Engg. Physics Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1D_dF_TyLddziMicLUbhZlQkk9fGxVPAb/view?usp=drive_link"
},
  {
    "Unit": "Engg. Physics Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1CqL2J7Eg8NQj8wwOd4IAjTPcQZ8TyuQu/view?usp=drive_link"
},
  {
    "Unit": "Engg. Physics Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1Dy-PoY9Gc00asNeD7MPwEOg8AAo0MjPl/view?usp=drive_link"
},
  {
    "Unit": "Engg. Physics Extra",
    "NotesUrl": "https://drive.google.com/file/d/1DTUfCfmamHN2V3msFyfAmzTCfMxJOk-a/view?usp=drive_link"
},
  {
    "Unit": "PPS Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1AruqQeX7Sf46asxfBAP6afxy613gqNxv/view?usp=drive_link"
},
  {
    "Unit": "PPS Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1BOpGq254WjEjDJ2Fd3w2lGf_PkbesaUc/view?usp=drive_link"
},
  {
    "Unit": "PPS Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1B-G6xP24YsqhGjonPVPSv52oyFh_Tb0h/view?usp=drive_link"
},
  {
    "Unit": "PPS Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1Ar6FPp_hvck4dDpwy48RPUG5_vTdyOvy/view?usp=drive_link"
},
  {
    "Unit": "PPS Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1BLxI8aPQ0mOUqC3x0le3YdbJgVKjBNn6/view?usp=drive_link"
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
    <h1> B.Tech 1st Year Notes</h1>
    {funData()}
      <hr />
    </div>
    </div>
  )
}
