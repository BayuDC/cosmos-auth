import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';

function Navbar() {
    const [active, setActive] = useState(false);
    const auth = useAuth();

    return (
        <div className="navbar is-dark">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item is-size-5 has-text-weight-bold">
                        CosmosAuth
                    </Link>
                    <div className={`navbar-burger ${active ? 'is-active' : ''}`} onClick={() => setActive(!active)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`navbar-menu ${active ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link to="/docs" className="navbar-item">
                            Docs
                        </Link>
                        <Link to="/dashboard" className="navbar-item">
                            Dashboard
                        </Link>
                        <Link to="/profile" className="navbar-item">
                            My Profile
                        </Link>
                    </div>
                    <div className="navbar-end">
                        {auth.user ? (
                            <div className="navbar-item">
                                <button to="/login" className="button is-danger has-text-weight-bold">
                                    Log out
                                </button>
                            </div>
                        ) : (
                            <>
                                <Link to="signup" className="navbar-item">
                                    Sign up
                                </Link>
                                <div className="navbar-item">
                                    <Link to="/login" className="button is-success has-text-weight-bold">
                                        Log In
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
