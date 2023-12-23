import React from "react";
import { Button } from "@mui/material";

function Paper() {
  const data = [{"_id":"65426af06fd9e5f0bc7a50ef","subjectName":"Engineering Chemistry Paper-1(2021-22)","subjectCode":"BAS202/102","papersUrl":"https://drive.usercontent.google.com/download?id=1GMEyRiiUAycAe_Uasf66xzXc18eagxmo&export=download&authuser=1&confirm=t&uuid=99c2ea9c-fda6-44cf-8a09-f791e588c0e9&at=APZUnTVNIzFR6lxAAK61d9vrGU0w:1698851166177","__v":0},{"_id":"65426d786fd9e5f0bc7a5764","subjectName":"Engineering Chemistry Paper-2(2022-23)","subjectCode":"BAS202//102","papersUrl":"https://drive.usercontent.google.com/download?id=1GFUK9ooiyJYAuTqdaGrJuVxtE26jHqUV&export=download&authuser=1&confirm=t&uuid=f223e65d-41fd-4dec-92ca-8b1d51ebf35e&at=APZUnTXDDoeQKBtgkvFnfbYe3vK_:1698852160186","__v":0},{"_id":"65426e7e6fd9e5f0bc7a5aaf","subjectName":"Engineering Chemistry Paper-3(2021-22)","subjectCode":"BAS102/202","papersUrl":"https://drive.usercontent.google.com/download?id=1GPoNuD_ifaphqLPgKjIsdHDkkZVvNgPh&export=download&authuser=1&confirm=t&uuid=9643db33-7cf8-432a-acb2-8df7f66136ff&at=APZUnTUWqymcnO2p_2QLvWevDsBT:1698852367946","__v":0},{"_id":"65426f036fd9e5f0bc7a5c69","subjectName":"Engineering Chemistry Paper-4(2020-21)","subjectCode":"BAS102//202","papersUrl":"https://drive.usercontent.google.com/download?id=1GR20v5s_8-kPbQEnzAI2yRq_tiDb10Hm&export=download&authuser=1&confirm=t&uuid=864ea864-368f-430b-a66a-b5499a8d874d&at=APZUnTWKIKSTLlbQBaeYmY7hnRkY:1698852547922","__v":0},{"_id":"65426fe66fd9e5f0bc7a5f46","subjectName":"Electronics Engineering Paper-1(2017-18)","subjectCode":"BEC101/201","papersUrl":"https://drive.usercontent.google.com/download?id=1EhNDReY18EYhOnX38iMbBZlCcGRR0WSt&export=download&authuser=1&confirm=t&uuid=e9d4bd26-e67e-4655-8274-6622cd0c22f8&at=APZUnTXWkh6RdvRPB6_VP4nCo8qT:1698852705226","__v":0},{"_id":"654270316fd9e5f0bc7a603d","subjectName":"Electronics Engineering Paper-2(2021-22)","subjectCode":"BEC201/101","papersUrl":"https://drive.usercontent.google.com/download?id=1EjY3WNYXwziJK-Q5kTxfdLmZrr2jQ1ia&export=download&authuser=1&confirm=t&uuid=c4b32d01-7945-4dc6-ae8f-6af74bc2bbe8&at=APZUnTUvEUzzo0fk3fizx8cnvT1L:1698852872161","__v":0},{"_id":"6542705e6fd9e5f0bc7a60d4","subjectName":"Electronics Engineering Paper-3(2020-21)","subjectCode":"BEC201//101","papersUrl":"https://drive.usercontent.google.com/download?id=1EgXjF9d2ZB10uV88JVkkCcre_Xx57YWK&export=download&authuser=1&confirm=t&uuid=9d5638b8-9fd3-4c0a-95e6-fd893f4b59e9&at=APZUnTXivWsSukhBW4AW3RM6Edqm:1698852922604","__v":0},{"_id":"6543c21b6fd9e5f0bc7ac6d6","subjectName":"Engineering Mathematics-1 Paper-1(2017-18)","subjectCode":"BAS203//103","papersUrl":"https://drive.usercontent.google.com/download?id=1Cl2P334mrgIu_4O5UV-YepvlcyYnbWRD&export=download&authuser=1&confirm=t&uuid=ccf7f922-8a84-4db8-b4a4-4dc90275e7e2&at=APZUnTVzgWvAm8iMonj1lZClCk0v:1698939315854","__v":0},{"_id":"6543c23c6fd9e5f0bc7ac744","subjectName":"Engineering Mathematics-1 Paper-2(2021-22)","subjectCode":"BAS203/103","papersUrl":"https://drive.usercontent.google.com/download?id=1CSLmpMwNGtDDW2Nby2PjQbJzh-A5mbhi&export=download&authuser=1&confirm=t&uuid=534ee6a7-9653-4a0c-b8a9-814fa2047834&at=APZUnTVybuuHkUvNPMVQDVjvQXkd:1698939430411","__v":0},{"_id":"6543c26a6fd9e5f0bc7ac7e2","subjectName":"Engineering Mathematics-1 Paper-3(2020-21)","subjectCode":"BAS203","papersUrl":"https://drive.usercontent.google.com/download?id=1CSXBtIIQ2HiTl9BRrksROb8sLYc1VXBY&export=download&authuser=1&confirm=t&uuid=a99c49f5-c648-43ae-9c1f-821985b97def&at=APZUnTXNiZMNn8docLEk3CmvieqI:1698939464711","__v":0},{"_id":"6543c28c6fd9e5f0bc7ac85b","subjectName":"Engineering Mathematics-1 Paper-4(2019-20)","subjectCode":"BAS103","papersUrl":"https://drive.usercontent.google.com/download?id=1CZS8wgcS7IjHpdPTq32T5dPZ9y5dyrmZ&export=download&authuser=1&confirm=t&uuid=8311fe74-700f-4fa5-bb49-74ccef98844c&at=APZUnTWNO2rPwnZXBw7D05QWldgn:1698939508495","__v":0},{"_id":"6543c2d16fd9e5f0bc7ac94e","subjectName":"Engineering Mathematics-1 Paper-5(2021-22)","subjectCode":"BAS103/203","papersUrl":"https://drive.usercontent.google.com/download?id=1CaaiAKQ8WOiQsH8x3sxKBtYmK5o_CD5v&export=download&authuser=1&confirm=t&uuid=78f85737-4ea4-4936-aef0-9a51e82e26d0&at=APZUnTVt0-PqMGOiuobAr2QlG6dY:1698939546074","__v":0},{"_id":"6543c3216fd9e5f0bc7aca6d","subjectName":"Engineering Mathematics-1 Paper-6(2018-19)","subjectCode":"BAS103//203","papersUrl":"https://drive.usercontent.google.com/download?id=1CYfLaLsPwVyf1VmWesZosJEhN79nuhPd&export=download&authuser=1&confirm=t&uuid=ed172e26-ed43-473e-a98e-c40192dcedbf&at=APZUnTU819oRhvjeWoOuJ1wKs5-l:1698939639487","__v":0},{"_id":"6543c4806fd9e5f0bc7acf41","subjectName":"Engineering Physics Paper-1(2017-18)","subjectCode":"BAS101//201","papersUrl":"https://drive.usercontent.google.com/download?id=1DP3L3a4t2HyTMHL-deY44kqAkCRFgVll&export=download&authuser=1&confirm=t&uuid=762c7541-b1a2-4139-93d3-417af8a346b5&at=APZUnTVTAN11KO0wU5gFGMU5iYDJ:1698939988611","__v":0},{"_id":"6543c4af6fd9e5f0bc7acfef","subjectName":"Engineering Physics Paper-2(2021-22)","subjectCode":"BAS201//101","papersUrl":"https://drive.usercontent.google.com/download?id=1DT1gUpVENtCto51Po5MLKVpqDUIPy_y5&export=download&authuser=1&confirm=t&uuid=8213f98e-f5f9-4ef0-9c43-02d5e3613e30&at=APZUnTUad5fCMAhjtixGLtDRWb7Z:1698940046141","__v":0},{"_id":"6543c5016fd9e5f0bc7ad10e","subjectName":"Engineering Physics Paper-3(2020-21)","subjectCode":"BAS201/101","papersUrl":"https://drive.usercontent.google.com/download?id=1D7_ZNt7FSdbEGHGBte01NVAxVq5SX1E0&export=download&authuser=1&confirm=t&uuid=97f920c4-b0c1-4654-923f-7e35420ec42c&at=APZUnTVPuNHTIo7pr8uaX03tIUef:1698940133101","__v":0},{"_id":"6543c5366fd9e5f0bc7ad1c1","subjectName":"Engineering Physics Paper-4(2019-20)","subjectCode":"BAS101/201","papersUrl":"https://drive.usercontent.google.com/download?id=1DGEnNxNGEkS86SpSEnZoePENuKxpah8x&export=download&authuser=1&confirm=t&uuid=e8accdd7-2b9c-4efd-bd29-788c6fbcf5f3&at=APZUnTW1jitIyzo8ql6YnA6SIb8u:1698940200171","__v":0},{"_id":"6543c55f6fd9e5f0bc7ad24b","subjectName":"Engineering Physics Paper-5(2021-22)","subjectCode":"BAS101","papersUrl":"https://drive.usercontent.google.com/download?id=1CvDSMH10vIJ-0T1niMqjgLgacc4KwooF&export=download&authuser=1&confirm=t&uuid=a7cb4036-fece-4013-b237-46f4d86bfcbc&at=APZUnTVz9qnKb5FcCSHOL_qk8KyH:1698940236774","__v":0},{"_id":"6543c5886fd9e5f0bc7ad2e4","subjectName":"Engineering Physics Paper-6(2018-19)","subjectCode":"BAS201","papersUrl":"https://drive.usercontent.google.com/download?id=1D4PMoI60rbn3ZaTVmTqVYVHRVa_T027I&export=download&authuser=1&confirm=t&uuid=b144a505-727a-4907-99b4-eb157348daf4&at=APZUnTXpx80V7XfH7uYPoi8BK5t_:1698940273637","__v":0},{"_id":"6543c6406fd9e5f0bc7ad32b","subjectName":"PROGRAMMING-FOR-PROBLEM-SOLVING Paper-1(2020-21)","subjectCode":"BCS201","papersUrl":"https://drive.usercontent.google.com/download?id=1B7RN2arFP3onHzkgy5YWkBID2y3j0PzL&export=download&authuser=1&confirm=t&uuid=73694c2a-1912-4d81-ac42-cac82ce0691f&at=APZUnTXyhhZPQiE--A86XgEBlfQZ:1698940455763","__v":0},{"_id":"6543c6636fd9e5f0bc7ad32d","subjectName":"PROGRAMMING-FOR-PROBLEM-SOLVING Paper-2(2021-22)","subjectCode":"BCS101","papersUrl":"https://drive.usercontent.google.com/download?id=1B4uxrcD1NkSIQBFEQp4XpX5s0MZ7IIZU&export=download&authuser=1&confirm=t&uuid=894210cb-9b43-4f3c-9e5d-91c1be8b86bb&at=APZUnTVBGgxYBrdnkK2Oisr15BWy:1698940494205","__v":0},{"_id":"6543c68b6fd9e5f0bc7ad32f","subjectName":"PROGRAMMING-FOR-PROBLEM-SOLVING Paper-3(2018-19)","subjectCode":"BCS101/201","papersUrl":"https://drive.usercontent.google.com/download?id=1BFSqfGTEDZXzugE84ZwYvlvvWxjp63PN&export=download&authuser=1&confirm=t&uuid=e408bdd5-0dc7-4b57-9a3a-16aaf0026387&at=APZUnTVyfRg__FqTMucz9R_G0yJn:1698940534403","__v":0},{"_id":"6543c6b56fd9e5f0bc7ad331","subjectName":"PROGRAMMING-FOR-PROBLEM-SOLVING Paper-4(2021-22)","subjectCode":"BCS201/101","papersUrl":"https://drive.usercontent.google.com/download?id=1BAYPtxSEFtHTLYBaNMKW0JKdGp3qjxk9&export=download&authuser=1&confirm=t&uuid=eb13ff25-ba64-4ea4-b8e6-a16acd796da4&at=APZUnTW7rSIbTQaAe79AXCC_8LSf:1698940571016","__v":0},{"_id":"6543c6dc6fd9e5f0bc7ad333","subjectName":"PROGRAMMING-FOR-PROBLEM-SOLVING Paper-5(2019-20)","subjectCode":"BCS201//101","papersUrl":"https://drive.usercontent.google.com/download?id=1BGoj2lixlFgWoOefPeMWjUw1cfA78zjj&export=download&authuser=1&confirm=t&uuid=481d79d7-c08d-4213-ab32-19a50bd79279&at=APZUnTXwvtz2AIumm37bj0TkOw99:1698940607355","__v":0},{"_id":"6543c7356fd9e5f0bc7ad335","subjectName":"Soft Skills Paper-1(2020-21)","subjectCode":"BAS105/205","papersUrl":"https://drive.usercontent.google.com/download?id=18h4ISqP34LRx6xxVxOqsObGfcOnw6eBp&export=download&authuser=1&confirm=t&uuid=9ce696ac-732c-457b-a2a7-59e3c04bb33f&at=APZUnTWx_nLofP52GAPbU5aJM7Sy:1698940665651","__v":0},{"_id":"6543c7bd6fd9e5f0bc7ad3c3","subjectName":"Soft Skills Paper-2(2021-22)","subjectCode":"BAS105//205","papersUrl":"https://drive.usercontent.google.com/download?id=18nUhI0atW6LNVjjYnPoQ4IX3hJxD-pMH&export=download&authuser=1&confirm=t&uuid=011eddf3-bf78-4688-a920-97bb1643b49f&at=APZUnTUQKSJDdt-M4oERKwekaF-_:1698940820599","__v":0}]

  function funData(){
    return(
      <>
    {data.map((item)=>(
  <div className="col-12 p-3 d-inline-flex justify-content-center flex-direction-row col-md-3">
  <div className="bg-my p-3 text-center">
  <p className="font-gradient3 subName font-founder">
    {item.subjectName}
  </p>
  <Button onClick = {()=> window.open(item.papersUrl, "_blank", "noreferrer")}>
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
    <h1>B.Tech 1st Year Papers</h1>
      {funData()}
      <hr />
    </div>
    </div>
  );
}

export default Paper;