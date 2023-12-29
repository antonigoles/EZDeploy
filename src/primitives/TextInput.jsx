function TextInput({
    className = [],
    label,
    placeholder,
    isPassword,
    value,
    onChange,
    id,
    pattern,
}) {
    return (
        <label
            className={[
                "active:text-black w-full flex justify-between flex-col items-left h-20",
                className,
            ].join(" ")}
        >
            <input
                id={id}
                enterKeyHint=""
                placeholder=""
                spellCheck="false"
                autoCorrect="false"
                autoComplete="off"
                className="peer bg-white decoration-transparent
        outline-none border-b-1 selection:bg-black 
        selection:text-white text-lg px-2 py-2 
        invalid:border-b-red-600 valid:border-b-green-500 valid:placeholder-shown:border-b-gray-300"
                type={isPassword ? "password" : "text"}
                value={value}
                onChange={onChange}
                pattern={pattern ? pattern : ""}
            />
            <div
                className="
                pointer-events-none 
                -translate-y-4
                text-gray-400 
                font-normal 
                peer-placeholder-shown:-translate-y-12
                peer-placeholder-shown:translate-x-2
                peer-focus:translate-x-0
                peer-focus:-translate-y-4
                peer-placeholder-shown:text-sm
                peer-focus:text-xs 
                text-xs 
                transition-all 
                peer-invalid:text-pink-600
                peer-valid:text-green-500
                peer-valid:peer-placeholder-shown:text-gray-400"
            >
                {label}
            </div>
        </label>
    );
}

export default TextInput;
