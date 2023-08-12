import './MyInput.sass'

function MyInput(name) {
    return (
        <div className="input-container">
            <input id={name} className="input" type="text" placeholder=" " />
            <div className="cut"></div>
            <label htmlFor={name} className="placeholder">{name.name}</label>
        </div>
    )
}

export default MyInput;