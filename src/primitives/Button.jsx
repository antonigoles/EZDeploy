function Button({ label, className = '', onClick }) {
    let _className =
        className instanceof Array ? className.join(' ') : className
    return (
        <div
            onClick={onClick}
            className={
                'bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white' +
                ' p-2 px-4 rounded-xl shadow-md transition-all text-center active:bg-green-700 ' +
                _className
            }
        >
            {label}
        </div>
    )
}

export default Button
