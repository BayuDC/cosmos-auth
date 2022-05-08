import Message from '../components/Message';

function Route({ path, guard }) {
    return (
        <li className="pb-2">
            <span className="is-family-monospace">{path}</span>
            {guard && <span class="ml-2 tag is-warning">{guard}</span>}
        </li>
    );
}

function Docs() {
    return (
        <>
            <div className="title">Route List</div>
            <div className="columns">
                <div className="column">
                    <Message title="Frontend">
                        <ul className="has-text-grey-dark">
                            <Route path="/" />
                            <Route path="/docs" />
                            <Route path="/dashboard" guard="Auth" />
                            <Route path="/profile" guard="Auth" />
                            <Route path="/signup" guard="Guest" />
                            <Route path="/login" guard="Guest" />
                        </ul>
                    </Message>
                </div>
                <div className="column">
                    <Message title="Backend">
                        <ul className="has-text-grey-dark">
                            <Route path="/api" />
                            <Route path="/api/auth" guard="Auth" />
                            <Route path="/api/auth/signup" guard="Guest" />
                            <Route path="/api/auth/login" guard="Guest" />
                            <Route path="/api/auth/me" guard="Auth" />
                        </ul>
                    </Message>
                </div>
            </div>
        </>
    );
}
export default Docs;
