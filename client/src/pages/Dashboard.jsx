import AuthGuard from '../guards/Auth';

function Dashboard() {
    return (
        <AuthGuard>
            <h1 className="title">Dashboard</h1>
            <div className="block">
                <div className="subtitle">Here an anime girl picture</div>
                <figure className="image box p-0 mb-1" style={{ maxWidth: '400px' }}>
                    <img src="https://pbs.twimg.com/media/FSJH6poVcAEAMA7?format=jpg&name=4096x4096" alt="" />
                </figure>
                <a
                    className="is-size-5 has-text-weight-bold is-underlined"
                    href="https://twitter.com/hd_1735/status/1522859071786811392?t=ESQKwqGVaP2U3tHbvhYOnA&s=19"
                    target="_blank"
                >
                    Sauce
                </a>
            </div>
        </AuthGuard>
    );
}
export default Dashboard;
