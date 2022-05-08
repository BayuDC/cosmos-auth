import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/Auth';
import Input from '../shared/Input';
import { apiUrl } from '../config';
import useAuth from '../hooks/auth';

function Login() {
    const auth = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setError({});

        if (password != password2) return setError({ password: 'Password does not match' });

        axios
            .post(apiUrl + '/auth/signup', { name, email, password })
            .then(res => {
                localStorage.setItem('token', res.data.token);
                auth.load();
                navigate('/dashboard', { replace: true });
            })
            .catch(err => {
                setError(err.response.data.error);
            });
    };

    return (
        <AuthLayout>
            <form onSubmit={handleSubmit} className="box has-background-light">
                <div className="block pb-2">
                    <h1 className="title">CosmosAuth - Sign Up</h1>
                </div>
                <div className="block">
                    <Input value={name} setValue={setName} error={error.name} name="Name" />
                    <Input value={email} setValue={setEmail} error={error.email} name="Email" />
                    <Input
                        value={password}
                        setValue={setPassword}
                        error={error.password}
                        name="Pasword"
                        type="password"
                    />
                    <Input
                        value={password2}
                        setValue={setPassword2}
                        error={error.password}
                        name="Confirm Password"
                        id="Pasword2"
                        type="password"
                    />
                </div>
                <div className="block">
                    <div className="control">
                        <div className="buttons is-flex is-justify-content-end">
                            <Link to="/login" type="button" className="button is-info is-light">
                                Log in
                            </Link>
                            <button type="submit" className="button is-info">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}

export default Login;
