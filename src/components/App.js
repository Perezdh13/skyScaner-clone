import FooterBar from './FooterBar';
import HeadBar from './HeadBar';
import HomePage from './HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      elemet:<><HeadBar/><FooterBar/><HomePage/></>
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
      <FooterBar/>
    </div>
  );
}

export default App;
