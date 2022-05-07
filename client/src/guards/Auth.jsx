import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/auth';

function AuthGuard({ guest = false, children }) {
    const auth = useAuth();

    if (!guest && !auth.user) return <Navigate to="/login" />;
    if (guest && auth.user) return <Navigate to="/" />;

    return <>{children}</>;
}

export default AuthGuard;
