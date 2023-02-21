import Footerbar from './FooterBar';
import HeadBar from './HeadBar';
import HomePage from './HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      elemet:<><HeadBar/><Footerbar/><HomePage/></>
    },
    {
      path:"/",
      elemet:<></>
    },
    {
      path:"/",
      elemet:<></>
    },
    {
      path:"/",
      elemet:<></>
    },
    {
      path:"/",
      elemet:<></>
    },
    {
      path:"/",
      elemet:<></>
    },
    
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
