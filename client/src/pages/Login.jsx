import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/Auth';
import Input from '../shared/Input';
import Alert from '../shared/Alert';
import { apiUrl } from '../config';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notif, setNotif] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setNotif({ message: 'Please wait...', color: 'info' });

        axios
            .post(apiUrl + '/auth/login', { email, password })
            .then(res => {
                setNotif({ message: 'Login success', color: 'success' });
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                setNotif({ message: err.response?.data?.error || 'Unknown error', color: 'danger' });
            });
    };

    return (
        <AuthLayout>
            <form action="" className="box has-background-light" onSubmit={handleSubmit}>
                <div className="block pb-2">
                    <h1 className="title">CosmosAuth - Log In</h1>
                </div>
                <div className="block">
                    <Input value={email} setValue={setEmail} name="Email" />
                    <Input value={password} setValue={setPassword} name="Password" type="password" />
                </div>
                <div className="block">
                    <Alert message={notif.message} color={notif.color} />
                </div>
                <div className="block">
                    <div className="control">
                        <div className="buttons is-flex is-justify-content-end">
                            <Link to="/signup" type="button" className="button is-info is-light">
                                Sign up
                            </Link>
                            <button type="submit" className="button is-info">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </AuthLayout>
    );
}

export default Login;
