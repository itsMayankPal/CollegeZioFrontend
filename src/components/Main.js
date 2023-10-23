import React from "react";
import "../App.css";
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import { Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import { useState } from "react";
import Papers from './Papers'
import Practicals from './Practicals'
import Notes from './Notes'
import Books from './Books'
import Playlists from './Playlists'
import Assignments from './Assignments'

function Main() {

  const customStyles = {
    fontSize: '16px', // Adjust the font size as needed
    margin: '0 10px', // Adjust the spacing around the buttons
  };
  const [selectedNavItem, setSelectedNavItem] = useState('books'); // Default selection

  const handleNavItemClick = (item) => {
    setSelectedNavItem(item);
  };
  return (

    

    <div className="main">
        <div className="flex-wrap flex-lg-row-reverse flex-lg-nowrap justify-content-around d-flex">
        <div className="d-flex m-5 flex-column-reverse p-0 justify-content-around">
            <div className="align-self-center" style={{width: '200px'}}> <hr /></div>
            <Button className="mt-5 font-founder align-self-center" style={{"cursor":"none"}} variant="outlined"><div className="display-5 font-gradient3 ">AKTU BTech First Year <SchoolIcon sx={{ fontSize: 60 }}/></div> </Button>
            <hr />
            <div className="font-gradient2 display-5 font-founder align-self-center">WE PROVIDE YOU RESOURCES FOR.....</div>
            <hr />
        </div>
        </div>
          <AppBar position="static">
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button onClick={() => handleNavItemClick('books')} to="/books" color="inherit" sx={customStyles}>Books</Button>
          <Button onClick={() => handleNavItemClick('assignments')} to="/assignments" color="inherit" sx={customStyles}>Assignments</Button>
          <Button onClick={() => handleNavItemClick('notes')} to="/notes" color="inherit" sx={customStyles}>Notes</Button>
          <Button onClick={() => handleNavItemClick('practicals')} to="/practicals" color="inherit" sx={customStyles}>Practicals</Button>
          <Button onClick={() => handleNavItemClick('papers')} to="/papers" color="inherit" sx={customStyles}>Papers</Button>
          <Button onClick={() => handleNavItemClick('playlists')} to="/playlists" color="inherit" sx={customStyles}>Playlists</Button>
        </Toolbar>
      </Container>
    </AppBar>
          <hr />
          <div>
        {selectedNavItem === 'books' && <Books />}
        {selectedNavItem === 'assignments' && <Assignments />}
        {selectedNavItem === 'notes' && <Notes />}
        {selectedNavItem === 'practicals' && <Practicals />}
        {selectedNavItem === 'papers' && <Papers />}
        {selectedNavItem === 'playlists' && <Playlists />}
      </div>

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

export default Main;
