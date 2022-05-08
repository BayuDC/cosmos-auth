import AuthGuard from '../guards/Auth';
import useAuth from '../hooks/auth';
import Input from '../shared/Input';

function Profile() {
    const auth = useAuth();

    return (
        <AuthGuard>
            <h1 className="title">My Profile</h1>
            <div className="box" style={{ maxWidth: '800px' }}>
                <div className="block">
                    <Input name="Name" value={auth.user?.name} readOnly />
                </div>
                <div className="block">
                    <Input name="Email" value={auth.user?.email} readOnly />
                </div>
                <div className="block">
                    <Input name="Password" value="********" type="password" readOnly />
                </div>
            </div>
        </AuthGuard>
    );
}
export default Profile;
