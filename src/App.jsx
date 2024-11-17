import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import Pastes from './componenets/Pastes';
import Viewpaste from './componenets/Viewpaste';

const router = createBrowserRouter([
  {
    path:"/",
    element:
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Home />
    </div>
  },
  {
    path:"/pastes",
    element:
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Pastes />
    </div>
  },
  {
    path:"/pastes/:id",
    element:
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Viewpaste />
    </div>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
