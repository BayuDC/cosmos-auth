function Input({ id, name, type, value, setValue }) {
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
                className="input"
                autoComplete="off"
            />
        </div>
    );
}

export default Input;
