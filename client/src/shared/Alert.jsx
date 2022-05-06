function Alert({ color, message }) {
    if (!message) return;

    return (
        <div className={`notification is-light is-${color || 'info'} has-text-centered has-text-weight-bold`}>
            {message}
        </div>
    );
}

export default Alert;
