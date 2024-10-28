import { Outlet } from "react-router"
import Apple from '../components/Apple';

export default function Root() {

    return (
        <>
            <Apple></Apple>
            < Outlet/>
        
        </>
    )
}