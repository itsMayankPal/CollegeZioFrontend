
import './App.css';

import AKTU from './components/AKTU-BTECH/AKTUComponent';
import CCSU from './components/CCSU-BCA/CCSUComponent'
// import User from './components/User';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import DeveloperCard from './components/DeveloperCard';
// import NewQuantum from './components/NewQuantum';



const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>,
    children:[
      {
        index: true,
        element: <Main/>
      },
    
    {
      path: "AKTU",
      element: <AKTU />,

    },
    {
      path: "/home",
      element: <Main/>
    },
    {
      path:'/CCSU',
      element:<CCSU></CCSU>
    },
    {
        path: '/Developers',
          element: <DeveloperCard/>
        },
  ]
  }

])


function App() {


  return (
    <div className="App">
      <RouterProvider router = {router}>
      </RouterProvider>



    </div>
  );
}

export default App;
