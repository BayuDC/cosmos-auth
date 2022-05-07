import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/auth';

function Logout() {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.unload();
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} className="button is-danger has-text-weight-bold">
            Log out
        </button>
    );
}

export default Logout;
