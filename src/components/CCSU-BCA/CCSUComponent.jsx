import React from 'react'
import { Helmet } from 'react-helmet';
import Menus from './Menus';

export default function CCSU()  {
  return (
    <div className="main">

      <Helmet>
        <title>CollegeZio - Your Ultimate Student Resource Hub</title>
        <meta
          name="description"
          content="CCSU - BCA, Notes, College, PYQ's, Papers, Assignment."
        />
      </Helmet>

        <div className="flex-wrap flex-lg-row-reverse flex-lg-nowrap justify-content-around d-flex">
        <div className="d-flex m-5 flex-column-reverse p-0 justify-content-around">
            <div className="align-self-center" style={{width: '200px'}}> </div>

            <hr />
            <div className="font-gradient2 display-5 font-founder align-self-center">WE PROVIDE YOU RESOURCES FOR BCA...</div>
            <hr />
        </div>
        </div>
          

            <Menus/>

          <hr />

        <div className="container pb-5">
        <div className="txt pb-4"><span className="font-gradient3 display-3 font-founder align-self-center">
                Explore Our Offerings:
              </span></div>
              <ul>
              <li className="text-light pb-4" >
                  <b><u>Previous Year Question Papers</u>: </b>Ace your exams with a comprehensive collection of previous year question papers across various courses.

              </li>
              <li className="text-light pb-4">
                  <b><u>Books and Reference Materials</u>: </b>Access a treasure trove of academic books and reference materials to deepen your understanding of subjects.

              </li>
              <li className="text-light pb-4">
                  <b><u>Comprehensive Notes</u>: </b>Simplify your studies with well-organized and easy-to-understand notes created by fellow students and educators.

              </li>
              <li className="text-light pb-4">
                  <b><u>Study Guides</u>: </b>Navigate through complex topics using our expertly curated study guides, designed to boost your learning experience.

              </li>
               </ul>
        </div>
        <div className="App">
    </div>
    </div>
  );
}