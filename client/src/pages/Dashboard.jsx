import AuthGuard from '../guards/Auth';

function Dashboard() {
    return (
        <AuthGuard>
            <h1 className="title">Dashboard</h1>
        </AuthGuard>
    );
}
export default Dashboard;
