import React from 'react'
import { Button } from '@mui/material'

export default function Notes() {
  const data = [
    {
        "Unit": "Programming Principle & Algorithm(PPA) Unit-1",
        "NotesUrl": "https://drive.google.com/file/d/1LXVSivJNHb4zTJ0U2CrvKgr2_nz2_DCp/view?usp=drive_link"
    },
    {
        "Unit": "Programming Principle & Algorithm(PPA) Unit-2",
        "NotesUrl": "https://drive.google.com/file/d/1LOE1ScJpVGc5UTJ1QvNnIBXn01FM39hh/view?usp=drive_link"
    },
    {
        "Unit": "Programming Principle & Algorithm(PPA) Unit-3",
        "NotesUrl": "https://drive.google.com/file/d/1L_CLPRCwbdElbiDBBHR9uURVD1hB51X8/view?usp=drive_link"
    },
    {
        "Unit": "Programming Principle & Algorithm(PPA) Unit-4",
        "NotesUrl": "https://drive.google.com/file/d/1LJ3HqmmBqWUjsM5RVV7SmEousGOtW4gm/view?usp=drive_link"
    },
    {
        "Unit": "Programming Principle & Algorithm(PPA) Unit-5",
        "NotesUrl": "https://drive.google.com/file/d/1LXD8XiuF-UCxJsjVvdSZFxhmj5AIh3EP/view?usp=drive_link"
    },   
  {
    "Unit": " Programming Principle & Algorithm(PPA) Unit-6",
    "NotesUrl": "https://drive.google.com/file/d/1LahZuhPPx8jSzEY1U1lYhiYRN2Evx7r4/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1JJqiTOOz5ZeA1sznKuylQOuJVaYKqSrQ/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1J8kk_9fhqWvNAFz3yzR396zmqTFd2Gog/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1JE57yAuSoxG_QCEH1zespNK53WmlNjTt/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1J5zrJguJug3ngOKoqQ9xOiwK4He5FvyW/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1JAIBiI2d0OIqI6A_Az5rxuasem2KGBqr/view?usp=drive_link"
},
  {
    "Unit": "Principle of Management (POM) Unit-6",
    "NotesUrl": "https://drive.google.com/file/d/1J5mS40VRs8yXS9kdRHzDGDkzTpoRH5qM/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1L-IPARuwdLksav4IkLVN9X75Gp611j87/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1L3ufsz0VbCcxNYbpFiKEQAI_FzgZCH8q/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1K_ZloEbFv_pBg_2Vtiq5Xj54IuNwTEpM/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1Knl7tMd5aQEzn9YPx1ECUnVcRxWKBNQv/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1KK4wsBO02Xm9tlhWGgSObJ1LfPdpK4L0/view?usp=drive_link"
},
  {
    "Unit": "Organization Behaviour (OB) Unit-6",
    "NotesUrl": "https://drive.google.com/file/d/1KVLUBbWjM1lE6tcpy2cw4otz3d1ZmikR/view?usp=drive_link"
},
  {
    "Unit": "C Programming (Unit 1)",
    "NotesUrl": "https://drive.google.com/file/d/1JyhPI7tOv2HcpgCzxxryw10ZFCUYE-ku/view?usp=drive_link"
},
  {
    "Unit": "C Programming (Unit 2)",
    "NotesUrl": "https://drive.google.com/file/d/1KUKRO5tJnKY3lnnsj-0xX2D1LTh9nRAK/view?usp=drive_link"
},
  {
    "Unit": "C Programming (Unit 3)",
    "NotesUrl": "https://drive.google.com/file/d/1KJRiH9TFvwOlyzrGS8OGJD3XN7u7-6N6/view?usp=drive_link"
},
  {
    "Unit": "C Programming (Unit 4)",
    "NotesUrl": "https://drive.google.com/file/d/1KTd1Q_QPkbquSO1ZIsJiZsK0O0V2TDAL/view?usp=drive_link"
},
  {
    "Unit": "C Programming (Unit 5)",
    "NotesUrl": "https://drive.google.com/file/d/1K2Wrv7fGov5cjbArKAIU-9-w1uPpXiYB/view?usp=drive_link"
},
  {
    "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-1",
    "NotesUrl": "https://drive.google.com/file/d/1LHxdbqHUByCBxS2nweLKoBSQtuaMOdtR/view?usp=drive_link"
},
  {
    "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-2",
    "NotesUrl": "https://drive.google.com/file/d/1LEhuJUR96Q05mXMkPeWEFsmT3mPfTvTp/view?usp=drive_link"
},
  {
    "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-3",
    "NotesUrl": "https://drive.google.com/file/d/1L4QgKSjfiibPfRlqL0UV6sBlh1eh2sjX/view?usp=drive_link"
},
  {
    "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-4",
    "NotesUrl": "https://drive.google.com/file/d/1L8jz3QFw7Nk_INB5YXHztVt2zetID7Bs/view?usp=drive_link"
},
  {
    "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-5",
    "NotesUrl": "https://drive.google.com/file/d/1LIdzRtDet2IAflDoZO2C2o2LsLGDjUS0/view?usp=drive_link"
},
{
  "Unit": "Computer Fundamental & Office Automation (CFOA) Unit-6",
  "NotesUrl": "https://drive.google.com/file/d/1LFkb7dF6-D5g7HmKcm8bfPsV7CsQA5q8/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-1",
  "NotesUrl": "https://drive.google.com/file/d/1Ml7CMYL992KbkDgsPHlIpeUT8jNNDjxM/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-2",
  "NotesUrl": "https://drive.google.com/file/d/1MaBu8q8D3A0IMIs37ypqSqMe9L41Zkne/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-3",
  "NotesUrl": "https://drive.google.com/file/d/1MyGf8bGFrJJ31_clkJjSr3TAd9QQZuBm/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-4",
  "NotesUrl": "https://drive.google.com/file/d/1MtJIW5F5si7_1ySOeEZxAlT_A3uwaOX6/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-5",
  "NotesUrl": "https://drive.google.com/file/d/1MafWFVg0ffCF9KXElepQOJujdUtdnL3d/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-6",
  "NotesUrl": "https://drive.google.com/file/d/1MID0sjkXBHSuojYdxhJBmWNNPEd8gknZ/view?usp=drive_link"
},
{
  "Unit": "Financial Accounting & Management (FAM) Unit-7",
  "NotesUrl": "https://drive.google.com/file/d/1M_zkwJ_J84Db26dkFH7to5_5w6u9R6Pn/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-1",
  "NotesUrl": "https://drive.google.com/file/d/1JnjhV8dJPiYVzc9HOTgQ2NX_tHBVA-g4/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-2",
  "NotesUrl": "https://drive.google.com/file/d/1J_RrQ26V-m2ErFjgPsZlKVQ8cwsZz7i1/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-3",
  "NotesUrl": "https://drive.google.com/file/d/1JLIUFrUXXMbAIj6OsbKeM6CfVC6XCkCM/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-4",
  "NotesUrl": "https://drive.google.com/file/d/1JTFGGd3ZGxqhQijO2X1QeULxTRJpMfNI/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-5",
  "NotesUrl": "https://drive.google.com/file/d/1JlL9m9cJ_9xtE28JDtBy4RwGi14in2ST/view?usp=drive_link"
},
{
  "Unit": "Business Communication (BC) Unit-6",
  "NotesUrl": "https://drive.google.com/file/d/1JValTbx9rV38kUu1JBEKqybt3t9Zmiw4/view?usp=drive_link"
}
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
    <h1> BCA 1st Year Notes</h1>
    {funData()}
      <hr />
    </div>
    </div>
  )
}