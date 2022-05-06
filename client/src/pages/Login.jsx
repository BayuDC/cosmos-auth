import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/Auth';

import Input from '../shared/Input';

function Login() {
    return (
        <AuthLayout>
            <form action="" className="box has-background-light">
                <div className="block">
                    <h1 className="title">CosmosAuth - Log In</h1>
                </div>
                <div className="block">
                    <Input name="Email" />
                    <Input name="Password" type="password" />
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
