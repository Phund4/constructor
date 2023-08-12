import './Form.sass'
import MyInput from '../MyInput/MyInput'
function Form() {
    return (
        <div id="form">
            <MyInput name='First name'/>
            <MyInput name='Last name'/>
            <MyInput name='Email'/>
            <button type="text" className="submit">submit</button>
        </div>
    )
}

export default Form