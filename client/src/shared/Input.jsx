function Input({ id, name, type, value, onChange }) {
    return (
        <div className="field">
            <label className="label" htmlFor={'input' + (id || name)}>
                {name}
            </label>
            <input
                value={value}
                onChange={onChange}
                type={type || 'text'}
                id={'input' + (id || name)}
                className="input"
                autoComplete="none"
            />
        </div>
    );
}

export default Input;
