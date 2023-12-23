import React from "react";
import "../App.css";
import { Helmet } from 'react-helmet';
import DeveloperCard from "./DeveloperCard";


function Main() {
  return (
    <div className="main">

      <Helmet>
        <title>CollegeZio - Your Ultimate Student Resource Hub</title>
        <meta
          name="description"
          content="AKTU Btech, Quantums, College, PYQ's, Papers, Assignment."
          />
      </Helmet>

        <div className="flex-wrap flex-lg-row-reverse flex-lg-nowrap justify-content-around d-flex">
        <div className="d-flex m-5 flex-column-reverse p-0 justify-content-around">
            <div className="align-self-center" style={{width: '200px'}}> </div>

            <hr />
            <span className="font-gradient4">Are you a BTECH or BCA student looking for comprehensive study resources, including the latest notes, previous year question papers, and valuable refresher content? Look no further! Our platform is designed to support your academic journey with a wide range of educational materials.</span>
            <hr />
            <div className="font-gradient2 display-5 font-founder align-self-center"><h1>Enhance Your Learning Journey with Latest Notes, Previous Year Question Papers, and More!</h1>
            </div>
            <hr />
        </div>
        </div>

          <hr />

        <div className="container pb-5">
        <div>
          <hr />
      <h2>Latest Notes for BTECH and BCA Courses</h2>
      <p>
        Stay up-to-date with the latest developments in your field with our curated collection of notes.
        Our platform offers regularly updated study materials to ensure you have access to the most recent
        and relevant content. Whether you're pursuing BTECH or BCA, our notes cover a variety of subjects,
        providing you with a well-rounded educational experience.
      </p>
      <hr />
      <h2>Ace Exams with Previous Year Question Papers</h2>
      <p>
        Success in exams often requires practice, and what better way to prepare than with previous year
        question papers? Our extensive database includes a wealth of past exam papers, allowing you to
        familiarize yourself with the exam pattern, question types, and difficulty levels. Boost your confidence
        and improve your performance by practicing with real exam questions.
      </p>
      <hr />

      <h2>YouTube Playlists for Visual Learning</h2>
      <p>
        We understand that different students have different learning preferences. That's why we've curated
        YouTube playlists covering a range of topics. These playlists feature engaging video content, making
        complex concepts easier to understand. Supplement your textual learning with dynamic visuals, helping
        you grasp concepts more effectively.
      </p>
      <hr />

      <h2>BTECH and BCA Refresher Courses</h2>
      <p>
        Feeling a bit rusty on certain topics? Our refresher courses are designed to help you revisit and
        reinforce key concepts. Whether you need a quick review before an exam or want to strengthen your
        foundational knowledge, our refresher courses are here to support you on your learning journey.
      </p>
      <hr />

      <h2>Build Confidence with Question Banks</h2>
      <p>
        Test your knowledge and build confidence with our extensive question banks. These question banks
        cover a variety of subjects and topics, allowing you to assess your understanding and identify areas
        for improvement. Use them as a valuable tool for self-assessment and targeted study.
      </p>

    <hr />
      <h2>Unlock the Power of Quantum Learning</h2>
      <p>
        Explore the fascinating world of quantum computing and quantum mechanics through our specialized
        Quantum Learning resources. Stay ahead in these cutting-edge fields with access to curated content
        and resources designed to deepen your understanding of quantum concepts.
      </p>
      <hr />

      <p>
        <strong>SEO Keywords:</strong> BTECH, BCA, Latest Notes, Previous Year Question Papers, YouTube Playlist,
        Refresher, Question Bank, Quantum Learning
      </p>
      <hr />

      <p>
        Make the most of your academic journey with our platform, where education meets innovation. Access the
        latest notes, previous year question papers, YouTube playlists, and more—all designed to empower you
        in your pursuit of knowledge. Start exploring and elevate your learning experience today!
      </p>
      <hr />
<DeveloperCard/>
    </div>
    </div></div>
  );
}

export default Main;
