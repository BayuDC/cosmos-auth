function Message({ title, children }) {
    return (
        <article className="message is-info">
            <div className="message-header">
                <p>{title}</p>
            </div>
            <div className="message-body">{children} </div>
        </article>
    );
}
export default Message;
