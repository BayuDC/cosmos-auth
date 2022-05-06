function Input({ id, name, type, value, setValue, error }) {
    return (
        <div className="field">
            <label className="label" htmlFor={'input' + (id || name)}>
                {name}
            </label>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type={type || 'text'}
                id={'input' + (id || name)}
                className={`input ${error ? 'is-danger' : ''}`}
                autoComplete="off"
            />
            <p className="help is-danger has-text-right">{error}</p>
        </div>
    );
}

export default Input;
