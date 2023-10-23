import React from 'react'
import logo from '../collegezio.jpeg';
import{Link} from 'react-router-dom'
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';
import EngineeringIcon from '@mui/icons-material/Engineering';
// import Signin from './Sign_in';
// import "https://fonts.googleapis.com/icon?family=Material+Icons"

function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <div> 
      <nav className="navbar navbar-expand-lg bg-col">
    <div className="container-fluid">
     <Link className="navbar-brand mx-5"to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bgmenu"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
        <ul className="nav d-flex mt-2 justify-content-center">
          <div className="nav-item mx-3">
          <Link className="nav-link text-light active" to={'/Home'}><Button variant="outlined" startIcon={<HomeIcon />} size="large" >Home</Button></Link>
          </div>
          {/* <li className="nav-item">
              <Link className="nav-link text-light d-none active" to= {'Notes'}>Notes</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link text-light active" to = {'Quantum'}><Button variant="outlined" startIcon={<EngineeringIcon/>} size="large" color="success" >Quantums</Button></Link>
          </li>
          {/* <li className="nav-item mx-3">
          <Link className="nav-link text-light active" to= {'Btech'}><Button variant="outlined" startIcon={<EngineeringIcon/>} size="large" color="success" >B.Tech</Button></Link>
          </li> */}
          <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined"
      >
        Dashboard
      </Button>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><Link to={'SignIn'}>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}><Link to={'SignUp'}>Sign Up</Link></MenuItem>
      </Menu>
 
          <li className="nav-item">
            <Link className="nav-link text-light d-none active" id='myDIV' to = {'SignIn'}>Sign-in</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link text-light d-none active" to = {'SignUp'}>Sign-Up</Link>
          </li> */}
        </ul>
      </div>
    </div>
      </nav>
      
      
      
      
      
      </div>
  )
}

export default Header