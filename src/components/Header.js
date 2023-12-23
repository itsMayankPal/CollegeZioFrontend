import React from 'react'
import logo from '../collegezio.jpeg';
import{Link} from 'react-router-dom'
// import DropdownMenu from './DropdownMenu';
import {
  Button,
} from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SchoolIcon from '@mui/icons-material/School';


function Header() {

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl();
  // };

  return (
   <div className=''>
      <nav className="navbar navbar-expand-lg bg-col">
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to={'/'}>
            <img src={logo} className="App-logo" alt="logo" />
          </Link>

          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-center">MENU</span>
          </Button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
            <ul className="navbar-nav d-flex mt-2 justify-content-center">
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to={'AKTU'}>
                  <Button variant="outlined" startIcon={<EngineeringIcon />} size="large" color="success">
                    AKTU
                  </Button>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to={'CCSU'}>
                  <Button variant="outlined" startIcon={<SchoolIcon />} size="large" color="success">
                    CCSU
                  </Button>
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link text-light" to={'Developers'}>
                  <Button variant="outlined" size="large" color="success">
                    Developers
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.label} component={Link} to={item.to}>
              <Button startIcon={item.icon} color="success">
                {item.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
    </div>
  )
}

export default Header