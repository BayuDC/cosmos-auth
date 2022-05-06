import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Main() {
    return (
        <>
            <Navbar />
            <div className="section">
                <div className="container">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
export default Main;
