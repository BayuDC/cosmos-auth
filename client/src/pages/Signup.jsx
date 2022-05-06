import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/Auth';

import Input from '../shared/Input';

function Login() {
    return (
        <AuthLayout>
            <form action="" className="box has-background-light">
                <div className="block">
                    <h1 className="title">CosmosAuth - Sign Up</h1>
                </div>
                <div className="block">
                    <Input name="Name" />
                    <Input name="Email" />
                    <Input name="Pasword" type="password" />
                    <Input name="Confirm Password" id="Pasword2" type="password" />
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
