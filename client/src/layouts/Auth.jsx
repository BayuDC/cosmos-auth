function Auth({ children }) {
    return (
        <div className="section">
            <div className="container">
                <div className="columns is-centered is-mobile">
                    <div className="column" style={{ maxWidth: '600px' }}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
