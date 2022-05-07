import AuthGuard from '../guards/Auth';

function Auth({ children }) {
    return (
        <AuthGuard guest>
            <div className="section">
                <div className="container">
                    <div className="columns is-centered is-mobile">
                        <div className="column" style={{ maxWidth: '600px' }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </AuthGuard>
    );
}

export default Auth;
