import github from '../assets/github-logo.png';

function Home() {
    return (
        <section className="hero is-warning">
            <div className="hero-body">
                <p className="title">Welcome to CosmosAuth</p>
                <p className="subtitle">A simple implementation of jwt auth in mern stack</p>
                <a href="https://github.com/BayuDC" target="_blank" className="button">
                    <span className="icon">
                        <img src={github} alt="github logo" />
                    </span>
                    <span className="has-text-weight-medium">BayuDC</span>
                </a>
            </div>
        </section>
    );
}
export default Home;
