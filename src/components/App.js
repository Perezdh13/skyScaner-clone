import footerbar from './footerbar';
import headBar from './headBar';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      elemet:<><headBar/>< Footerbar/></>
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
