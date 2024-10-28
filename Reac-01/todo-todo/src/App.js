import './App.css';
import TodoList from './components/TodoList/TodoList';
import {createBrowserRouter, RouterProvider} from 'react-'

const router = createBrowserRouter([
  {
    path:'/',
    element: <p>Home</p>
  },{
    path: '/video',
    element: <p>Video</p>
  },
]);
function App() {
  return (
    <>
       <RouterProvider router= {router}></RouterProvider>
   
    </>
  );
}

export default App;
