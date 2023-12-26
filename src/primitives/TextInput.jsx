function TextInput({
    className = [],
    label,
    placeholder,
    isPassword,
    value,
    onChange,
}) {
    return (
        <label
            className={[
                'active:text-black w-full flex justify-between flex-col items-left',
                className,
            ].join(' ')}
        >
            <div className="text-sm font-medium text-gray-700 ">{label}</div>
            <input
                autoCorrect="none"
                placeholder={placeholder}
                className="bg-white decoration-transparent
        outline-none border-b-1 selection:bg-black 
        selection:text-white border-b-gray-400 text-lg px-2 py-2 
        valid:border-b-green-500 empty:border-b-gray-400"
                type={isPassword ? 'password' : 'text'}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}

export default TextInput
