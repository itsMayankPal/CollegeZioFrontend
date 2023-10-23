
import './App.css';


import Notes from './components/Notes';
import Quantum from './components/Quantum';
import User from './components/User';


import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Main from './components/Main';
import NewQuantum from './components/NewQuantum';



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
      path: "notes",
      element: <Notes />,

    },
    {
      path: "/home",
      element: <Main/>
    },
    {
      path:'/Quantum',
      element:<Quantum></Quantum>
    },
    {
      path:'/NewQuantum',
      element:<NewQuantum></NewQuantum>
    },
    {
        path: '/User',
          element: <User/>
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
