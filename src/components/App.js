import Footerbar from './Footerbar';
import HeadBar from './HeadBar';
import HomePage from './HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><HeadBar/><Footerbar/><HomePage/></>
    },
    {
      path:"/",
      element:<></>
    },
    {
      path:"/",
      element:<></>
    },
    {
      path:"/",
      element:<></>
    },
    {
      path:"/",
      element:<></>
    },
    {
      path:"/",
      element:<></>
    },
    
  ])

  return (
    <div className="App">
      <HeadBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
