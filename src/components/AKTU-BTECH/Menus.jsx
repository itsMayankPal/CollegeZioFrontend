import React, { useState } from 'react';
import {
  Button,
  Container,
  useMediaQuery,
  useTheme,
  ListItemText,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import FirstYearMenu from './FirstYearMenu';
import SecondYearMenu from './SecondYearMenu';
import ThirdYearMenu from './ThirdYearMenu';
import FourthYearMenu from './FourthYearMenu';

function Menus() {
  const [selectedNavItem, setSelectedNavItem] = useState('First');
  const [selectedComponent, setSelectedComponent] = useState(<FirstYearMenu />);

  const handleOptionSelect = (option) => {
    setSelectedNavItem(option); // Update the button text
    switch (option) {
      case 'First':
        setSelectedComponent(<FirstYearMenu />);
        break;
      case 'Second':
        setSelectedComponent(<SecondYearMenu />);
        break;
      case 'Third':
        setSelectedComponent(<ThirdYearMenu />);
        break;
      case 'Fourth':
        setSelectedComponent(<FourthYearMenu />);
        break;
      default:
        setSelectedComponent(null);
    }
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container sx={{ backgroundColor: '#2d2d86',borderRadius: '10px', minHeight: '50vh', paddingTop: '10px' }}>
      <div className="container">
        <Container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>

<Container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignContent: 'space-around', alignItems: 'center', flexDirection: isMobile ? 'column' : 'row' }}>

              <Button variant="contained" sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }} onClick={() => handleOptionSelect('First')}>
                <ListItemText primary="First" />
              </Button>
              <Button variant="contained" sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }} onClick={() => handleOptionSelect('Second')}>
                <ListItemText primary="Second" />
              </Button>
              {/* <Button variant="contained" sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }} onClick={() => handleOptionSelect('Third')}>
                <ListItemText primary="Third" />
              </Button>
              <Button variant="contained" sx={{ width: '150px', marginBottom: isMobile ? '8px' : '0', marginRight: isMobile ? '0' : '8px', '&:hover': { backgroundColor: 'darkblue' } }} button onClick={() => handleOptionSelect('Fourth')}>
                <ListItemText primary="Fourth" />
              </Button> */}

            </Container>
        {/* </Popover> */}
          </Container>
      </div>

      {/* Render the selected component */}

      <hr />
      <div variant="outlined"><div className="display-5 text-center font-gradient3 ">AKTU BTech {selectedNavItem} Year <SchoolIcon sx={{ fontSize: 60 }}/></div> </div>
      <hr />

      <div className="container d-flex justify-content-center">{selectedComponent}</div>
    </Container>
  );
}

export default Menus;
