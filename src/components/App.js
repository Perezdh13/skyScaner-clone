import FooterBar from './FooterBar';
import HeadBar from './HeadBar';
import HomePage from './HomePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import '../css/App.css';

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:<><HeadBar/><HomePage/><FooterBar/></>
    },
    
  ])

  return (
    <div className="App">
      
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
