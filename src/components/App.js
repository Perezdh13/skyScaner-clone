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
    
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
