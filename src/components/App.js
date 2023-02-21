import Footerbar from './Footerbar.jsx';
import HeadBar from './HeadBar.jsx';
import HomePage from './HomePage.jsx';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><HeadBar/><Footerbar/><HomePage/></>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
