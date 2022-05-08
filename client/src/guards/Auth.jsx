import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/auth';

function AuthGuard({ guest = false, children }) {
    const auth = useAuth();

    if (!guest && !auth.user) return <Navigate to="/login" replace />;
    if (guest && auth.user) return <Navigate to="/" replace />;

    return <>{children}</>;
}

export default AuthGuard;
