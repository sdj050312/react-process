
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Sdj from "./pages/Sdj";
import Root from "./pages/Root";
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement : <NotFound></NotFound>,
  children :[{ index: true, element :<Home/>}, {path: '/videos', element: <Sdj/>}, {path : '/videos/:videoId', element: <VideoDetail/>}],
},
{
  path : '/home',
  element : <Home/>,
  errorElement : <NotFound/>
},
 {
  path : '/sdj',
  element :  <Sdj/>,
  errorElement : <NotFound/>
},]);
function App() {

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
