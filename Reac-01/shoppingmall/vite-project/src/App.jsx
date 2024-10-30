
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import VideoItem from './pages/Videoitem';
import VideoDetail from './pages/VideoDetail';
import VideoTem from './pages/VideoTem';
import ErrorElement from './pages/ErrorElement';
import Root from './pages/Root';


const router = createBrowserRouter([{
  path: '/',
  element : <Root/>, 
  errorElemet: <ErrorElement></ErrorElement>, 
  children : [{ index:true, element: <VideoTem/>}, {path :'/videos' , element: <VideoItem></VideoItem>}, {path : '/videos/:videoId', element: <VideoDetail/>}]
}, {
   path :'/videos',
   element : <VideoItem></VideoItem>,
   errorElement : <ErrorElement/>
},
 {
  path: '/videoTem',
  element: <VideoTem/>
  ,errorElement : <ErrorElement/>
 }
])
function App() {

  return (
    <>
    <RouterProvider router = {router}/>
    </>
  )
}

export default App
