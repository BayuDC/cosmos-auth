import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { apiUrl } from '../config';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const load = () => {
        setLoading(true);
        const token = localStorage.getItem('token');

        axios
            .get(apiUrl + '/auth/me', {
                headers: { Authorization: 'Bearer ' + token },
            })
            .then(res => setUser(res.data.user))
            .catch(() => setUser(undefined))
            .finally(() => setLoading(false));
    };
    const unload = () => {
        localStorage.removeItem('token');
        setUser(undefined);
    };

    useEffect(() => {
        load();
    }, []);

    if (loading) return <Loading />;

    return <AuthContext.Provider value={{ user, load, unload }}>{children}</AuthContext.Provider>;
}
