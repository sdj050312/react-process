import {Outlet} from 'react-router';
import Apple from "../components/Apple.jsx";

export default function Root () {

    return (
      <>
        <Apple/>     
          <Outlet/>
      </>
    )
}