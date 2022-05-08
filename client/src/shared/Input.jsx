function Input({ id, name, type = 'text', value, setValue = () => {}, error, readOnly }) {
    return (
        <div className="field">
            <label className="label" htmlFor={'input' + (id || name)}>
                {name}
            </label>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type={type}
                id={'input' + (id || name)}
                className={`input ${error ? 'is-danger' : ''}`}
                autoComplete="off"
                readOnly={readOnly}
            />
            <p className="help is-danger has-text-right">{error}</p>
        </div>
    );
}

export default Input;
