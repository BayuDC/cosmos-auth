import github from '../assets/github-logo.png';

function Home() {
    return (
        <section class="hero is-warning">
            <div class="hero-body">
                <p class="title">Welcome to CosmosAuth</p>
                <p class="subtitle">A simple implementation of jwt auth in mern stack</p>
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
